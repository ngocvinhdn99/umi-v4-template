import { native } from '@/utils';
import { Button } from 'antd';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <div style={{ marginBottom: 15 }}>
        <Button
          type="primary"
          onClick={() => {
            console.log('cashbagSdk: ', window.cashbagSdk);
            // const isMobile =
            //   window.cashbagSdk?.isAndroid?.() || window.cashbagSdk?.isIOS?.();
            // if (isMobile && typeof window.sdkHandler !== 'undefined') {
            //   window.sdkHandler.sendUserAuthorization = function (data) {
            //     console.log('sendUserAuthorization: ', data);
            //   };
            // }
          }}
        >
          get_user_token
        </Button>
      </div>
      <div style={{ marginBottom: 15 }}>
        <Button
          type="primary"
          ghost
          onClick={() => {
            console.log('sdkHandler: ', window.sdkHandler);
            // const isMobile =
            //   window.cashbagSdk?.isAndroid?.() || window.cashbagSdk?.isIOS?.();
            // if (isMobile && typeof window.sdkHandler !== 'undefined') {
            //   window.sdkHandler.sendDeviceInfo = function (data) {
            //     console.log('sendDeviceInfo: ', data);
            //   };
            // }
          }}
        >
          get_device_info
        </Button>
      </div>
      <div style={{ marginBottom: 15 }}>
        <Button
          type="primary"
          danger
          ghost
          onClick={() => {
            native.closeNativeWebview();
          }}
        >
          close_native_webview
        </Button>
      </div>
    </div>
  );
}
