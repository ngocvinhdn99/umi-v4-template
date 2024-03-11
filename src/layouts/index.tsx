import { native } from '@/utils';
import { Button } from 'antd';
import { useEffect } from 'react';
import styles from './index.less';

export default function Layout() {
  useEffect(() => {
    window.sendUserAuthorization = (data) => {
      console.log('sendUserAuthorization: ', data);
    };
    window.sendDeviceInfo = (data) => {
      console.log('sendDeviceInfo: ', data);
    };
  }, []);

  return (
    <div className={styles.navs}>
      <div style={{ marginBottom: 15 }}>
        <Button
          type="primary"
          onClick={() => {
            native.getUserToken();
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
            native.getDeviceInfo();
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
