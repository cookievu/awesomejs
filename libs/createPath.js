const path = require('path');

module.exports = (pathName) => {
	return path.join(__dirname, pathName)
}