import { useState, useEffect } from 'react';
import FileTree from '@/components/FileTree';
import Editor from '@/components/Editor';
import StatusBar from '@/components/StatusBar';
import { useEditor } from '@/hooks/useEditor';
import { useFileSystem, saveFileContent } from '@/hooks/useFileSystem'; // ✅ 增加 saveFileContent 导入

export default function Home() {
  const { files, selectedFile, setSelectedFile, loadFolder } = useFileSystem();
  const { content, setContent, isDirty, saveFile } = useEditor(selectedFile);

  // 确保文件内容在selectedFile变化时更新
useEffect(() => {
  const interval = setInterval(() => {
    if (isDirty && selectedFile && selectedFile.handle) {
      saveFileContent(selectedFile, content);
      setIsDirty(false);
    }
  }, 30000);

  return () => clearInterval(interval);
}, [isDirty, selectedFile, content]);

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    if (selectedFile) {
      selectedFile.content = newContent;
    }
  };

const handleSave = async () => {
  const updatedFile = saveFile(); // 更新内存状态
  if (updatedFile && selectedFile?.handle) {
    await saveFileContent(selectedFile, updatedFile.content); // 写入磁盘
    setSelectedFile(updatedFile);
  }
};

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100">
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[300px] border-r border-gray-700 overflow-y-auto">
          <FileTree 
            files={files} 
            selectedFile={selectedFile}
            onSelect={setSelectedFile}
            onOpenFolder={loadFolder}
          />
        </div>
        <div className="flex-1 overflow-auto" style={{ height: '100%' }}>
          <Editor 
            content={content}
            onChange={handleContentChange}
            onSave={handleSave}
            isDirty={isDirty}
          />
        </div>
      </div>
      <StatusBar 
        filePath={selectedFile?.path || ''}
        isDirty={isDirty}
        lastSaved={selectedFile?.lastSaved}
      />
    </div>
  );
}