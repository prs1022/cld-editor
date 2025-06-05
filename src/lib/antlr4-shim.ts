// Import and re-export specific named exports from antlr4
import antlr4 from 'antlr4';

// Export the default import
export default antlr4;

// Export specific named exports that you're using
export const CharStreams = {
  fromString: (input) => new antlr4.InputStream(input)
};
export const CommonTokenStream = antlr4.CommonTokenStream;
export const InputStream = antlr4.InputStream;
export const Token = antlr4.Token;
export const Lexer = antlr4.Lexer;
export const Parser = antlr4.Parser;

// Re-export tree submodule
export const tree = {
  ParseTreeVisitor: antlr4.tree.ParseTreeVisitor,
  AbstractParseTreeVisitor: antlr4.tree.ParseTreeVisitor
};

// Re-export atn submodule if needed
export const atn = antlr4.atn;