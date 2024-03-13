import { ILoading } from '@/interfaces';
import { ITestState } from '@/models/test';
import { native } from '@/utils';
import { Button } from 'antd';
import { useEffect } from 'react';
import { Dispatch, connect } from 'umi';

interface Props {
  dispatch: Dispatch;
  testModel: ITestState;
  loading: ILoading;
}

const Layout = (props: Props) => {
  const { testModel, dispatch, loading } = props;
  const { name } = testModel;

  useEffect(() => {
    window.sendUserAuthorization = (data) => {
      console.log('sendUserAuthorization: ', data);
    };
    window.sendDeviceInfo = (data) => {
      console.log('sendDeviceInfo: ', data);
    };
    globalThis.window.sendUserAuthorization = (data) => {
      console.log('sendUserAuthorization: ', data);
    };
    globalThis.window.sendDeviceInfo = (data) => {
      console.log('sendDeviceInfo: ', data);
    };
    global.window.sendUserAuthorization = (data) => {
      console.log('sendUserAuthorization: ', data);
    };
    global.window.sendDeviceInfo = (data) => {
      console.log('sendDeviceInfo: ', data);
    };
  }, []);

  function sendUserAuthorization(data) {
    console.log('data: ', data);
  }

  return (
    <div style={{ padding: 20 }}>
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
      <div style={{ marginBottom: 15 }}>
        <Button
          type="primary"
          onClick={() => {
            native.openAffiliateFromUrl('https://shope.ee/8A8POENJHk');
          }}
        >
          open_affiliate_from_url
        </Button>
      </div>
    </div>
  );
};

export default connect(({ testModel, loading }) => ({
  testModel,
  loading,
}))(Layout);
