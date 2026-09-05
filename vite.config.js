import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        networking: resolve(__dirname, 'networking.html'),
        jobs: resolve(__dirname, 'jobs.html'),
        events: resolve(__dirname, 'events.html'),
      },
    },
  },
});