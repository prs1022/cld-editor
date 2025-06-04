import Prism from 'prismjs';

// 定义CLD语言
Prism.languages.cld = {
  // 关键词
  'keyword': /\b(namespace|import|clause|prime)\b/,
  
  // 注解
  'annotation': /@(statement|type|attr)\b/,
  
  // 词槽（使用<>包围的内容）
  'slot': /<[^>]+>/,
  
  // 宏定义和调用
  'macro': {
    pattern: /\b\w+\s*\([^)]*\)\s*:/,
    inside: {
      'function': /^\w+/,
      'punctuation': /[(),:]/
    }
  },
  
  // 宏参数引用
  'macro-param': /\$\w+/,
  
  // 属性赋值和脚本
  'script': {
    pattern: /<\([^)]*\)>/,
    inside: {
      'punctuation': /[<>()]/,
      'operator': /[=+\-*\/!?:;]/,
      'keyword': /\b(true|false)\b/,
      'number': /\b\d+\b/,
      'variable': /\b[a-zA-Z_]\w*\b/
    }
  },
  
  // 动态属性
  'dynamic-attr': {
    pattern: /<\*\([^)]*\)>/,
    inside: {
      'punctuation': /[<>*()]/,
      'operator': /=/,
      'string': /"[^"]*"/,
      'boolean': /\b(true|false)\b/,
      'variable': /\b[a-zA-Z_]\w*\b/
    }
  },
  
  // 字符串
  'string': /"[^"]*"/,
  
  // 注释
  'comment': /\/\/.*$/m,
  
  // 操作符
  'operator': /[|?+*:;]/,
  
  // 标点符号
  'punctuation': /[(){}\[\]]/
};

// 注册语言
Prism.languages.cldgrammar = Prism.languages.cld;