import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';

// 导入我们的CLD语言定义和样式
import '../lib/prism-cld';
import '../styles/prism-cld.css';

// 导入Prism的基础样式
import 'prismjs/themes/prism-dark.css';

type EditorProps = {
  content: string;
  onChange: (content: string) => void;
  onSave: () => void;
  isDirty: boolean;
};

export default function CodeEditor({ content, onChange, onSave, isDirty }: EditorProps) {
  const editorContainerRef = useRef<HTMLDivElement>(null);
  
  // 添加键盘事件监听，支持Ctrl+S保存
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 检测Ctrl+S或Command+S (Mac)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault(); // 阻止浏览器默认保存行为
        if (isDirty) {
          onSave();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDirty, onSave]);

  // 移除滚轮事件处理，让浏览器默认滚动行为生效
  // 这样可以避免滚动和编辑之间的冲突

  // 高亮函数
  const highlightWithLineNumbers = (code: string) => {
    return highlight(code, languages.cld, 'cld');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-2 border-b border-gray-700">
        <span className="text-sm text-gray-400">Editor</span>
        <button
          className={cn(
            "px-3 py-1 rounded text-sm",
            isDirty ? "bg-cyan-600 hover:bg-cyan-700" : "bg-gray-700 text-gray-400"
          )}
          onClick={onSave}
          disabled={!isDirty}
        >
          Save
        </button>
      </div>
      <div 
        ref={editorContainerRef}
        className="editor-wrapper"
      >
        <Editor
          value={content}
          onValueChange={onChange}
          highlight={highlightWithLineNumbers}
          padding={16}
          className="editor-instance"
          placeholder="Select a .cld file to edit..."
          style={{
            fontFamily: '"Consolas", "Monaco", monospace',
            fontSize: 14,
          }}
          textareaId="cld-editor"
        />
      </div>
    </div>
  );
}