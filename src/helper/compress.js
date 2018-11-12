const {createGzip, createDeflate} = require('zlib')

/*
* 将传输文本进行压缩
* */

module.exports = (rs, req, res) => {
	const acceptEncoding = req.headers['accept-encoding'];
	
	if (!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)\b/)) {
		return rs;
	} else if (acceptEncoding.match(/\bgzip\b/)) {
		res.setHeader('Content-Encoding', 'gzip');
		return rs.pipe(createGzip());
	} else if (acceptEncoding.match(/\bdeflate\b/)) {
		res.setHeader('Content-Encoding', 'deflate');
		return rs.pipe(createDeflate());
	}
};
