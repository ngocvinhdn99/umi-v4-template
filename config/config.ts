import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  routes,
  npmClient: 'yarn',
  fastRefresh: true,
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  clickToComponent: {
    editor: 'vscode',
  },
  hash: true,
  ignoreMomentLocale: true,
  links: [
    {
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
      rel: 'stylesheet',
      integrity:
        'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/dva',
    '@umijs/plugins/dist/request',
    '@umijs/plugins/dist/locale',
  ],
  request: {},
  model: {},
  dva: {},
  locale: {
    default: 'vi-VN',
  },
});
