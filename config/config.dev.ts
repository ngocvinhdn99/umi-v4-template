import { defineConfig } from 'umi';

export default defineConfig({
  scripts: ['https://cdn.jsdelivr.net/npm/eruda', 'eruda.init()'],
  define: {
    'process.env.API_ENDPOINT': '',
  },
});
