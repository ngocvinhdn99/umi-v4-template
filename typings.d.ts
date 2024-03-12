import 'umi/typings';

declare global {
  interface Window {
    webkit?: any;
    sendUserAuthorization: (data: any) => void;
    sendDeviceInfo: (data: any) => void;
  }
}
