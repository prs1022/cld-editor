const path = require('path');

module.exports = {
  // ... 其他配置 ...
  resolve: {
    fallback: { fs: false }, // 对于Webpack 5
    extensions: ['.ts', '.tsx', '.js']
  },
  // ... 其他配置 ...
};