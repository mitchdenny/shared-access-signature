var util = require('util');
var crypto = require('crypto');

function SignatureGenerator()
{
	var self = this;

	return {
		generateSignature: function(url, sharedAccessKeyName, sharedAccessKey) {
			var epochTime = new Date().getTime();
			var expiryTime = epochTime + 3600;

			var data = util.format('%s\n%s', encodeURIComponent(url), expiryTime);

			var algorithm = crypto.createHmac('sha256', sharedAccessKey);
			algorithm.update(data);
			var signature = algorithm.digest('base64');

			var token = util.format(
				'SharedAccessSignature sr=%s&sig=%s&se=%s&skn=%s',
				encodeURIComponent(url),
				encodeURIComponent(signature),
				encodeURIComponent(expiryTime),
				encodeURIComponent(sharedAccessKeyName)
				);

			return token;
		}
	};
}

module.exports = new SignatureGenerator();
