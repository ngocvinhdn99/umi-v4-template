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

const openAffiliateFromUrl = (url: string) => {
  if (!url) {
    return;
  }
  sendMessage({
    type: 'open_affiliate_from_url',
    value: url,
  });
};

export default {
  getUserToken,
  getDeviceInfo,
  closeNativeWebview,
  openAffiliateFromUrl,
};
