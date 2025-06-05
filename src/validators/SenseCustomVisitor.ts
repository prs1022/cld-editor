import { SenseVisitor } from '../generated/SenseVisitor';
import antlr4 from 'antlr4';
import * as SenseParser from '../generated/SenseParser';

export interface SemanticError {
  line: number;
  charPositionInLine: number;
  msg: string;
  type: 'warning' | 'error';
}

// 修改继承关系
export class SenseCustomVisitor extends antlr4.tree.ParseTreeVisitor implements SenseVisitor {
  private semanticErrors: SemanticError[] = [];
  
  // 默认访问方法
  defaultResult() {}
  
  // 获取收集到的语义错误
  getSemanticErrors(): SemanticError[] {
    return this.semanticErrors;
  }
  
  // 检查变量命名规则
  private isValidVariableName(name: string): boolean {
    // 实现变量命名规则，例如：
    // 1. 必须以字母开头
    // 2. 只能包含字母、数字和下划线
    // 3. 不能是关键字
    const validPattern = /^[a-zA-Z][a-zA-Z0-9_]*$/;
    const keywords = ['namespace', 'import', 'true', 'false'];
    
    return validPattern.test(name) && !keywords.includes(name);
  }
  
  // 实现访问器方法，检查语义规则
  // 例如，检查变量命名规则
  visitPrimeSentence(ctx: SenseParser.PrimeSentenceContext): void {
    const name = ctx.name?.text;
    if (name && !this.isValidVariableName(name)) {
      this.semanticErrors.push({
        line: ctx.start.line,
        charPositionInLine: ctx.start.charPositionInLine,
        msg: `变量名 '${name}' 不符合命名规则`,
        type: 'error'
      });
    }
  }
  
  // 实现其他访问器方法...
}