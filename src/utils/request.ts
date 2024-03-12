import { ApiConst } from '@/configs';
import { request } from 'umi';
import storage from './storage';

interface IRequestOptions {
  method?: string;
  body?: any;
  params?: any;
  endpoint?: string;
  headers?: any;
}

interface IDefaultHeaders {
  [key: string]: string;
}

const getDefaultHeader = (defaultHeaders: IDefaultHeaders) => {
  const headers = {
    ...defaultHeaders,
  };

  return headers;
};

const getDefaultOptions = (options: IRequestOptions) => {
  const headers = getDefaultHeader(options.headers);
  const authToken = storage.getAuthToken();

  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`;
  }

  return {
    headers,
  };
};

async function call(path: string, opts: IRequestOptions) {
  const baseUrl = ApiConst.endpointTypes[opts.endpoint || 'apiEndpoint'];
  const url = baseUrl + path;

  const newOptions = {
    ...opts,
    ...getDefaultOptions(opts),
  };

  newOptions.body = JSON.stringify(opts.body);

  const res = await request(url, newOptions);

  return {
    ...res.data,
    success: res.status < 400,
  };
}

export default {
  call,
};
