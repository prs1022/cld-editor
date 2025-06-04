import { useState, useEffect } from 'react';
import { FileItem } from './useFileSystem';

export function useEditor(selectedFile: FileItem | null) {
  const [content, setContent] = useState('');
  const [isDirty, setIsDirty] = useState(false);
  const [autoSaveInterval, setAutoSaveInterval] = useState<number>();

  useEffect(() => {
    if (selectedFile) {
      setContent(selectedFile.content || '');
      setIsDirty(false);
    } else {
      setContent('');
      setIsDirty(false);
    }
  }, [selectedFile]);

  useEffect(() => {
    if (autoSaveInterval) {
      clearInterval(autoSaveInterval);
    }

    const interval = setInterval(() => {
      if (isDirty && selectedFile) {
        saveFile();
      }
    }, 30000); // 30秒自动保存

    setAutoSaveInterval(interval);

    return () => {
      if (autoSaveInterval) {
        clearInterval(autoSaveInterval);
      }
    };
  }, [isDirty, selectedFile]);

  const saveFile = () => {
    if (selectedFile) {
      const updatedFile = {
        ...selectedFile,
        content,
        lastSaved: new Date()
      };
      setIsDirty(false);
      return updatedFile;
    }
    return null;
  };

  // 在 useFileSystem 中添加 saveFileContent 函数
  async function saveFileContent(file: FileItem, content: string) {
    if (!file.handle) return; // handle 是 FileSystemFileHandle

    const writable = await file.handle.createWritable();
    await writable.write(content);
    await writable.close();

    toast.success('File saved successfully');
  }

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    if (selectedFile) {
      selectedFile.content = newContent;
    }
    if (!isDirty) {
      setIsDirty(true);
    }
  };

  return {
    content,
    setContent: handleContentChange,
    isDirty,
    saveFile
  };
}