import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

export default {
    // ... other configurations ...
    esbuild: {
      module: true,
      esbuild: false,
    },
  }