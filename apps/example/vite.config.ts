import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-unused-modules
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_example',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './page': './src/App.tsx',
        './component': './src/Button.tsx',
      },
      shared: [],
    }),
    tsconfigPaths(),
    svgrPlugin(),
  ],
  /* If proxy is needed
  server: {
    proxy: {
      "/api": "localhost:8080"
    }
  },
  */
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
