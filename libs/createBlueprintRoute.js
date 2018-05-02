const fs = require('fs')
const blueprints = require('../bin/defines/blueprint')
const actionPath = require('./actionPath')

module.exports = (model) => {
	const temps = []
	blueprints(model).map(item => {
		if (fs.existsSync(actionPath(model, item.action))) {
			temps.push({ path: item.path, method: item.method, route: 'controllers/' + model + '/' + item.action })
		} else {
			temps.push({ path: item.path, method: item.method, route: 'blueprints/' + item.action })
		}
	})
	return temps
}