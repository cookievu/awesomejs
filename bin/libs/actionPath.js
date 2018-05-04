const path = require('path');

module.exports = (model, action) => {
	return path.join(__dirname, '../api/controllers/' + model + '/' + action + '.js')
}