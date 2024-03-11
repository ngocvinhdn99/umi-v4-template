const sendMessage = (data: any) => {
  const newData = JSON.stringify(data);
  // ios
  window?.webkit?.messageHandlers?.jsMessageHandler?.postMessage(newData);
  // android
  global?.JSBridge?.sendMessage(newData);
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
}
