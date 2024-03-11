var partnerHandler = new (function() {
  var RequestTPB = {
    version_platform: '1.0',
    event: '',
    checksum: '',
    vendorID: '',
    deviceCode: '',
    userToken: '',
    transactionID: '',
    providerCode: '',
    serviceCode: '',
    invoice: '',
    amount: '',
    transactionDesc: '',
    payload: '',
  };

  // subscriber data from web
  window.addEventListener('message', function(event) {
    tpbanksdk.updateFromNative(event.data);
  });

  this.updateFromDataNative = function(message) {
    // TODO process data received from native and web tpbank
    // alert(message);
  };

  this.updateVerifyResponse = function(message) {
    // TODO process data received from native and web tpbank
    // alert(message);
  };

  this.updateConfirmResponse = function(message) {
    // TODO process data received from native and web tpbank
    alert(message);
  };

  this.setPlatform = function(message) {
    // TODO process data received from native and web tpbank
    // console.log(message);
    // alert(message);
    // document.getElementById('myspan').textContent = message;
  };

  this.sendDataForNative = function(window, event) {
    tpbanksdk.sendMessage(window, RequestTPB);
  };
})();
