var url = 'https://namespace.servicebus.windows.net/hubname/publishers/devicename/messages';
console.log('url: %s', url);

var sharedAccessKeyName = 'sample-key';
console.log('sharedAccessKeyName: %s', sharedAccessKeyName);

var sharedAccessKey = 'S4lxDeOkdGFgi7xbIVdBakWpxDaPitKsGFUPFxZKT14=';
console.log('sharedAccessKey: %s', sharedAccessKey);

var sas = require('../index');
var signature = sas.generateSignature(url, sharedAccessKeyName, sharedAccessKey);
console.log('signature: %s', signature);
