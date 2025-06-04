import { toast } from 'sonner';
import { useState, useEffect } from 'react';
import { openDB } from 'idb';

export type FileItem = {
  id: string;
  name: string;
  type: 'folder' | 'cld' | 'other';
  path: string;
  content?: string;
  lastSaved?: Date;
  children?: FileItem[];
  handle?: FileSystemFileHandle; // 添加这个字段
};

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

function getFileType(name: string): 'folder' | 'cld' | 'other' {
  if (name.endsWith('.cld')) return 'cld';
  return 'other';
}

async function readFileContent(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

function buildTreeFromPaths(files: File[]): FileItem[] {
  const root: FileItem = {
    id: 'root',
    name: '',
    type: 'folder',
    path: '',
    children: []
  };

  files.forEach(file => {
    const parts = file.webkitRelativePath.split('/');
    let currentLevel = root;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isLast = i === parts.length - 1;

      if (isLast) {
        currentLevel.children?.push({
          id: generateId(),
          name: part,
          type: getFileType(part),
          path: file.webkitRelativePath,
          content: part.endsWith('.cld') ? '' : undefined,
          lastSaved: new Date(file.lastModified)
        });
      } else {
        let found = currentLevel.children?.find(child => child.name === part);
        if (!found) {
          found = {
            id: generateId(),
            name: part,
            type: 'folder',
            path: parts.slice(0, i + 1).join('/'),
            children: []
          };
          currentLevel.children?.push(found);
        }
        currentLevel = found;
      }
    }
  });

  return root.children || [];
}

// 添加 saveFileContent 函数
export async function saveFileContent(file: FileItem, content: string) {
  if (!file.handle) return;

  const writable = await file.handle.createWritable();
  await writable.write(content);
  await writable.close();

  toast.success('File saved successfully');
}

export function useFileSystem() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);

  useEffect(() => {
    const restoreLastFolder = async () => {
      try {
        // 尝试从 IndexedDB 获取保存的文件夹句柄
        const db = await openDB('cld-editor', 1);
        const dirHandle = await db.get('handles', 'dirHandle');
        
        if (!dirHandle) return;
        
        // 请求持久权限
        if ((await dirHandle.requestPermission({ mode: 'readwrite' })) !== 'granted') {
          toast.error('需要权限才能访问之前打开的文件夹');
          return;
        }
        
        const rootItems: FileItem[] = [];
        
        for await (const entry of dirHandle.values()) {
          if (entry.kind === 'directory') {
            rootItems.push(await processDirectory(entry, ''));
          } else {
            rootItems.push(await processFile(entry, ''));
          }
        }
        
        setFiles(rootItems);
        toast.success(`已恢复文件夹: ${dirHandle.name}`);
      } catch (error) {
        console.warn('Failed to restore last folder:', error);
        toast.info('请重新打开文件夹');
      }
    };
    
    restoreLastFolder();
  }, []);
  const loadFolder = async () => {
    try {
      if (!('showDirectoryPicker' in window)) {
        throw new Error('File System Access API not supported');
      }

      const dirHandle = await window.showDirectoryPicker({ mode: 'readwrite' });
      
      // 保存文件夹句柄到 IndexedDB 以便后续恢复
      try {
        const db = await openDB('cld-editor', 1, {
          upgrade(db) {
            if (!db.objectStoreNames.contains('handles')) {
              db.createObjectStore('handles');
            }
          },
        });
        await db.put('handles', dirHandle, 'dirHandle');
      } catch (err) {
        console.error('Failed to save directory handle:', err);
      }
      
      localStorage.setItem('lastOpenedPath', dirHandle.name); 
      const rootItems: FileItem[] = [];
      
      for await (const entry of dirHandle.values()) {
        if (entry.kind === 'directory') {
          rootItems.push(await processDirectory(entry, ''));
        } else {
          rootItems.push(await processFile(entry, ''));
        }
      }
      
      setFiles(rootItems);
      toast.success('Folder loaded successfully');
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        if (error.name === 'SecurityError' || error.message.includes('not supported')) {
          return new Promise<void>((resolve) => {
            const input = document.createElement('input');
            input.type = 'file';
            input.webkitdirectory = true;
            input.multiple = true;
            
            input.onchange = async (e) => {
              const files = Array.from((e.target as HTMLInputElement).files || []);
              const tree = buildTreeFromPaths(files);
              
              setFiles(tree);
              toast.success('Folder loaded successfully (using fallback method)');
              resolve();
            };
            
            input.click();
          });
        } else {
          toast.error('Failed to load folder');
          console.error(error);
        }
      }
    }

    
  };

  const processDirectory = async (dirHandle: FileSystemDirectoryHandle, parentPath: string): Promise<FileItem> => {
    const path = `${parentPath}/${dirHandle.name}`;
    const children: FileItem[] = [];
    
    for await (const entry of dirHandle.values()) {
      if (entry.kind === 'directory') {
        children.push(await processDirectory(entry, path));
      } else {
        children.push(await processFile(entry, path));
      }
    }
    
    return {
      id: generateId(),
      name: dirHandle.name,
      type: 'folder',
      path,
      children
    };
  };

  const processFile = async (fileHandle: FileSystemFileHandle, parentPath: string): Promise<FileItem> => {
    const path = `${parentPath}/${fileHandle.name}`;
    const file = await fileHandle.getFile();
    let content = '';
    
    if (fileHandle.name.endsWith('.cld')) {
      content = await readFileContent(file);
    }
    
    return {
      id: generateId(),
      name: fileHandle.name,
      type: getFileType(fileHandle.name),
      path,
      content,
      lastSaved: new Date(file.lastModified),
      handle: fileHandle  // 添加这一行，保存文件句柄
    };
  };


  const handleSelectFile = async (file: FileItem) => {
    if (file.type === 'cld') {
      try {
        let content = '';
        
        // 如果有文件句柄，始终从磁盘读取最新内容
        if (file.handle) {
          try {
            const fileObj = await file.handle.getFile();
            content = await readFileContent(fileObj);
          } catch (error) {
            console.error('Error reading file from handle:', error);
            content = file.content || '';
          }
        } else if (content === undefined || content === '') {
          // 原有的回退逻辑保持不变
          try {
            if ('showOpenFilePicker' in window) {
              const fileHandle = await window.showOpenFilePicker({
                types: [{
                  description: 'CLD Files',
                  accept: {
                    'text/plain': ['.cld']
                  }
                }]
              });
              const fileObj = await fileHandle[0].getFile();
              content = await readFileContent(fileObj);
              return {
                id: generateId(),
                name: fileHandle.name,
                type: getFileType(fileHandle.name),
                path,
                content,
                lastSaved: new Date(fileObj.lastModified),
                handle: fileHandle // 保存句柄
              };
            } else {
              // 回退到使用input元素读取
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = '.cld';
              
              content = await new Promise<string>((resolve) => {
                input.onchange = async (e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) {
                    resolve(await readFileContent(file));
                  } else {
                    resolve('');
                  }
                };
                input.click();
              });
            }
          } catch (error) {
            console.error('Error reading file:', error);
            content = '';
          }
        }
        
        // 确保更新selectedFile状态，包括内容
        const updatedFile = {
          ...file,
          content: content || '',
          lastSaved: new Date()
        };
        setSelectedFile(updatedFile);
        return updatedFile;
      } catch (error) {
        console.error('Error reading file:', error);
        const updatedFile = { ...file, content: '' };
        setSelectedFile(updatedFile);
        return updatedFile;
      }
    } else {
      setSelectedFile(file);
      return file;
    }
  };


  return {
    files,
    selectedFile,
    setSelectedFile: handleSelectFile,
    loadFolder
  };
}