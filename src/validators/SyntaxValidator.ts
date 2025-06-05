// 修改导入路径
import { CharStreams, CommonTokenStream } from '../lib/antlr4-shim';
import SenseLexer from '../generated/SenseLexer'; // 修改为默认导入
import SenseParser from '../generated/SenseParser'; // 也需要修改为默认导入
import { SenseErrorListener, SyntaxError } from './SenseErrorListener';
import { SenseCustomVisitor, SemanticError } from './SenseCustomVisitor';

export interface ValidationResult {
  syntaxErrors: SyntaxError[];
  semanticErrors: SemanticError[];
}

export class SyntaxValidator {
  validate(input: string): ValidationResult {
    // 创建输入流
    const inputStream = CharStreams.fromString(input);
    
    // 创建词法分析器
    const lexer = new SenseLexer(inputStream);
    
    // 创建错误监听器并添加到词法分析器
    const errorListener = new SenseErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(errorListener);
    
    // 创建令牌流
    const tokenStream = new CommonTokenStream(lexer);
    
    // 创建语法分析器
    const parser = new SenseParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    
    // 语义错误
    let semanticErrors: SemanticError[] = [];
    
    // 开始解析
    try {
      const tree = parser.sense(); // 从语法的根规则开始解析
      
      // 如果没有语法错误，进行语义分析
      if (!errorListener.hasErrors()) {
        try {
          const visitor = new SenseCustomVisitor();
          visitor.visit(tree);
          semanticErrors = visitor.getSemanticErrors();
        } catch (visitorError) {
          console.error('语义分析过程中发生错误:', visitorError);
          // 添加一个通用的语义错误
          semanticErrors.push({
            line: 1,
            charPositionInLine: 0,
            msg: '语义分析过程中发生错误: ' + visitorError.message,
            type: 'error'
          });
        }
      }
    } catch (e) {
      console.error('解析过程中发生错误:', e);
    }
    
    // 返回收集到的错误
    return {
      syntaxErrors: errorListener.getSyntaxErrors(),
      semanticErrors: semanticErrors
    };
  }
}