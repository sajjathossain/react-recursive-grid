import { defineConfig } from '@farmfe/core';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: ['@farmfe/plugin-react'],
});
