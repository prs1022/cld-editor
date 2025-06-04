import { useState } from 'react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

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

type FileTreeProps = {
  files: FileItem[];
  selectedFile: FileItem | null;
  onSelect: (file: FileItem) => void;
  onOpenFolder: () => Promise<void>;
};

export default function FileTree({ files, selectedFile, onSelect, onOpenFolder }: FileTreeProps) {
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);

  const toggleFolder = (id: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getFileIcon = (type: string) => {
    switch(type) {
      case 'folder':
        return expandedFolders[type] ? 'fa-folder-open' : 'fa-folder';
      case 'cld':
        return 'fa-file-code';
      default:
        return 'fa-file';
    }
  };

  const handleOpenFolder = async () => {
    try {
      setIsLoading(true);
      await onOpenFolder();
    } catch (error) {
      if (error instanceof Error && error.message.includes('not supported')) {
        toast.error('File System Access API not supported in this environment. Using fallback method...');
      } else {
        toast.error('Failed to open folder');
        console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const renderFileItem = (file: FileItem, level = 0) => {
    const isSelected = selectedFile?.id === file.id;
    const isExpanded = file.type === 'folder' && expandedFolders[file.id];
    const paddingLeft = `${level * 16 + 16}px`;
    
    return (
      <div key={file.id} className="w-full">
        <div 
          className={cn(
            "flex items-center py-1 px-2 rounded hover:bg-gray-800 cursor-pointer",
            isSelected && "bg-cyan-900 text-cyan-400"
          )}
          style={{ paddingLeft }}
           onClick={async (e) => {

              if (file.type === 'folder') {
                e.stopPropagation();
                toggleFolder(file.id);
              } else {
                e.stopPropagation();
                try {
                  await onSelect(file);
                } catch (error) {
                  console.error('Error selecting file:', error);
                  toast.error('Failed to load file content');
                }
              }

           }}
        >
          <i 
            className={cn(
              "fa-solid mr-2 text-gray-400",
              file.type === 'folder' ? (isExpanded ? 'fa-folder-open' : 'fa-folder') : 
              file.type === 'cld' ? 'fa-file-code' : 'fa-file'
            )}
          />
          <span className="truncate">{file.name}</span>
          {file.type === 'folder' && (
            <button 
              className="ml-auto"
              onClick={(e) => {
                e.stopPropagation();
                toggleFolder(file.id);
              }}
              aria-label={isExpanded ? "Collapse folder" : "Expand folder"}
            >
              <i className="fa-solid fa-chevron-right text-xs text-gray-400 transition-transform duration-200" 
                style={{ transform: isExpanded ? 'rotate(90deg)' : 'none' }}
              />
            </button>
          )}
        </div>
        
        {file.type === 'folder' && isExpanded && file.children && (
          <div className="overflow-hidden transition-all duration-200">
            {file.children.map(child => renderFileItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-2 border-b border-gray-700">
        <button
          onClick={handleOpenFolder}
          disabled={isLoading}
          className={cn(
            "flex items-center justify-center w-full py-2 px-4 rounded bg-gray-800 hover:bg-gray-700 text-sm",
            isLoading && "opacity-50 cursor-not-allowed"
          )}
        >
          {isLoading ? (
            <i className="fa-solid fa-spinner fa-spin mr-2" />
          ) : (
            <i className="fa-solid fa-folder-open mr-2" />
          )}
          Open Folder
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-2">
        {files.map(file => renderFileItem(file, 0))}
      </div>
    </div>
  );
}