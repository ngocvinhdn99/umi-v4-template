export interface IApi {
  url: string;
  method?: string;
  endpoint?: string;
}

const methods = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
  patch: 'patch',
};

export default {
  methods,
  endpointTypes: {
    apiEndpoint: process.env.API_ENDPOINT,
  },
};
