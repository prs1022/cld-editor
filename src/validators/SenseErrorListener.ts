// 修改导入
import antlr4 from 'antlr4';

export interface SyntaxError {
  line: number;
  charPositionInLine: number;
  msg: string;
  offendingSymbol?: any;
}

// antlr4的错误监听器实现方式与antlr4ts略有不同
export class SenseErrorListener extends antlr4.error.ErrorListener {
  private errors: SyntaxError[] = [];

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push({
      line,
      charPositionInLine: column,
      msg,
      offendingSymbol
    });
  }

  getSyntaxErrors(): SyntaxError[] {
    return this.errors;
  }

  hasErrors(): boolean {
    return this.errors.length > 0;
  }

  clearErrors(): void {
    this.errors = [];
  }
}