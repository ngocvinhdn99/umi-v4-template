import { AppConst } from '@/configs';

function getAuthToken() {
  return localStorage.getItem(AppConst.localStorage.authToken);
}

function setAuthToken(token: string) {
  return localStorage.setItem(AppConst.localStorage.authToken, token);
}

export default {
  getAuthToken,
  setAuthToken,
}
