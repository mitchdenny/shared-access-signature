var util = require('util');
var crypto = require('crypto');

function SignatureGenerator()
{
	var self = this;

	return {
		generateServiceBusSignature: function(url, sharedAccessKeyName, sharedAccessKey, expiry) {
			var data = util.format('%s\n%s', encodeURIComponent(url), expiry);

			var algorithm = crypto.createHmac('sha256', sharedAccessKey);
			algorithm.update(data);
			var signature = algorithm.digest('base64');

			var token = util.format(
				'SharedAccessSignature sr=%s&sig=%s&se=%s&skn=%s',
				encodeURIComponent(url),
				encodeURIComponent(signature),
				encodeURIComponent(expiry),
				encodeURIComponent(sharedAccessKeyName)
				);

			return token;
		}
	};
}

module.exports = new SignatureGenerator();