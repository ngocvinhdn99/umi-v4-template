import { defineConfig } from 'umi';

export default defineConfig({
  scripts: [
    'https://cdn.jsdelivr.net/npm/eruda',
    "eruda.init(); function sendUserAuthorization(data) { console.log('data', data); }",
  ],
  define: {
    'process.env.API_ENDPOINT': '',
  },
});
