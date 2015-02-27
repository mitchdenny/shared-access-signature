var url = 'https://namespace.servicebus.windows.net/hubname/publishers/devicename/messages';
console.log('url: %s', url);

var sharedAccessKeyName = 'sample-key';
console.log('sharedAccessKeyName: %s', sharedAccessKeyName);

var sharedAccessKey = 'S4lxDeOkdGFgi7xbIVdBakWpxDaPitKsGFUPFxZKT14=';
console.log('sharedAccessKey: %s', sharedAccessKey);

var currentDate = new Date();
console.log('currentDate: %s', currentDate);

var expiry = currentDate.getTime() + 3600;
console.log('expiry: %s', expiry);

var sas = require('../index');
console.log(sas);
var signature = sas.generateServiceBusSignature(url, sharedAccessKeyName, sharedAccessKey, expiry);
console.log('signature: %s', signature);
