import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { cn } from '@/lib/utils';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';

// 导入我们的CLD语言定义和样式
import '../lib/prism-cld';
import '../styles/prism-cld.css';

// 导入Prism的基础样式
import 'prismjs/themes/prism-dark.css';
import { SyntaxValidator } from '../validators/SyntaxValidator';
import { SyntaxError } from '../validators/SenseErrorListener';

type EditorProps = {
  content: string;
  onChange: (content: string) => void;
  onSave: () => void;
  isDirty: boolean;
};

export default function CodeEditor({ content, onChange, onSave, isDirty }: EditorProps) {
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const [syntaxErrors, setSyntaxErrors] = useState<SyntaxError[]>([]);
  const syntaxValidator = useMemo(() => new SyntaxValidator(), []);
  
  // 添加语法验证
  const validateSyntax = useCallback((code: string) => {
    try {
      // 恢复语法验证
      const result = syntaxValidator.validate(code);
      setSyntaxErrors(result.syntaxErrors);
      return result.syntaxErrors;
    } catch (error) {
      console.error('语法验证过程中发生错误:', error);
      setSyntaxErrors([]);
      return [];
    }
  }, [syntaxValidator]);
  
  // 在内容变化时进行验证，可以添加防抖以提高性能
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      validateSyntax(content);
    }, 500); // 500ms防抖
    
    return () => clearTimeout(timeoutId);
  }, [content, validateSyntax]);
  
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
    // 基本语法高亮
    const highlighted = highlight(code, languages.cld, 'cld');
    
    // 如果需要，可以在这里添加错误标记的逻辑
    return highlighted;
  };
  
  // 渲染错误提示
  const renderErrorMarkers = () => {
    if (syntaxErrors.length === 0) return null;
    
    return (
      <div className="error-markers">
        {syntaxErrors.map((error, index) => (
          <div key={index} className="error-item">
            行 {error.line}:{error.charPositionInLine} - {error.msg}
          </div>
        ))}
      </div>
    );
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
          padding={10}
          className="editor-instance"
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            overflow: 'visible',
            minHeight: '100%',
            height: 'auto'
          }}
        />
      </div>
      {renderErrorMarkers()}
    </div>
  );
}