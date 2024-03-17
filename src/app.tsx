import type { RequestConfig, RequestOptions } from 'umi';

export const request: RequestConfig = {
  timeout: 30000,
  errorConfig: {},
  requestInterceptors: [
    (url: string, options: RequestOptions) => {
      console.log('requestInterceptors');
      return {
        url,
        options: options,
      };
    },
  ],
  responseInterceptors: [
    (response) => {
      console.log('responseInterceptors');

      if (response.status === 404) {
        // todo
      }

      if (response.status === 403) {
        // todo
      }

      if (response.status === 401) {
        // todo
      }


      return {
        ...response,
        data: {
          ...response.data,
          success: response.status < 400
        }
      };
    },
  ],
};
