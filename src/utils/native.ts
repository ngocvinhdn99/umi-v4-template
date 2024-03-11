const sendMessage = (data: any) => {
  const newData = JSON.stringify(data);
  // ios
  const a = window?.webkit?.messageHandlers?.jsMessageHandler?.postMessage(newData);
  // android
  const b = global?.JSBridge?.sendMessage(newData);

  console.log('first: ', a);
  console.log('second: ', b);
};

const getUserToken = () => {
  sendMessage({
    type: 'get_user_token',
  });
};

const getDeviceInfo = () => {
  sendMessage({
    type: 'get_device_info',
  });
};

const closeNativeWebview = () => {
  sendMessage({
    type: 'close_native_webview',
  });
};

export default {
  getUserToken,
  getDeviceInfo,
  closeNativeWebview,
};
