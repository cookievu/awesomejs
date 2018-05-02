const path = require('path');

module.exports = (name) => {
	return path.join(__dirname, '../api/models/' + name + '.js')
}