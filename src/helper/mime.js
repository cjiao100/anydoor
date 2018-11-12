const path = require('path');

const mimeTypes = {
	'txt': 'text/plain',
	'html': 'text/html',
	'xml': 'text/xml',
	'css': 'text/css',
	'js': 'text/javascript',
	'gif': 'image/gif',
	'ico': 'image/x-icon',
	'jpeg': 'image/jpeg',
	'jpg': 'image/jpeg',
	'png': 'image/png',
	'tiff': 'image/tiff',
	'svg': 'image/svg+xml',
	'wav': 'audio/x-wav',
	'wma': 'audio/x-ms-wma',
	'wmv': 'video/x-ms-wmv',
	'json': 'application/json',
	'pdf': 'application/pdf',
	'swf': 'application/x-shockwave-flash'
};

module.exports = (filePath) => {
	let ext = path.extname(filePath).split('.').pop().toLowerCase();
	
	if (!ext) {
		ext = filePath;
	}
	
	return mimeTypes[ext] || mimeTypes['txt'];
	
};
