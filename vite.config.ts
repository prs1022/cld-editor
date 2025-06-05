/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

function getPlugins() {
  const plugins = [react(), tsconfigPaths()];
  return plugins;
}

export default defineConfig({
  plugins: getPlugins(),
  resolve: {
    alias: {
      // 如果需要，可以添加别名
    }
  },
  optimizeDeps: {
    include: ['antlr4ts']
  },
  build: {
    commonjsOptions: {
      include: [/antlr4ts/, /node_modules/]
    }
  }
});
