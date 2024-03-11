import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
  ],
  npmClient: 'yarn',
  plugins: [
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/request',
  ],
  headScripts: ['cashbag-sdk.min.js', 'sdkHandler.js'],
  scripts: ['https://cdn.jsdelivr.net/npm/eruda', 'eruda.init()'],
});
