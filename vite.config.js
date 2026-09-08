import { defineConfig } from 'vite';

export default defineConfig({
  base: '/savvy/',
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  }
});
