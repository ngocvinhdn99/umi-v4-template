import 'umi/typings';

declare global {
  interface Window {
    webkit?: any;
    sdkHandler: any;
    cashbagSdk: any;
  }
}

declare var sdkHandler: ISdkHandler;
interface ISdkHandler extends Window {
  setPlatform: (data: any) => void;
}

declare var cashbagSdk: ICashbagsdk;
interface ICashbagsdk extends Window {
  isAndroid: () => boolean;
  isIOS: () => boolean;
}
