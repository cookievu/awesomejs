const fs = require('fs')
const debug = require('debug')(process.env.DEBUG)
const methods = require('./defines/methods')

const webRoutes = require('../routes/web')

module.exports = (app) => {
	const arrRoutes = []
	const checkMethod = (method) => methods.find(e => e === method)

	for (let string in webRoutes) {
		let route = {}

		const keyArr = string.split(' ')
		route.method = keyArr[0]
		if (!checkMethod(route.method)) {
			console.error('Method is not exists. In route "' + string + '"')
			break;
		}
		route.path = keyArr[1]

		const value = webRoutes[string]
		const valueArr = webRoutes[string].split('@')
		route.action = valueArr[0]

		if (valueArr[1]) {
			route.polices = valueArr[1].split(',')
		}
		arrRoutes.push(route)
	}

	arrRoutes.map(route => {
		let polices = []
		if (route.polices && route.polices.length) {
			polices = route.polices.map(police => require('../api/polices/' + police + '.js'))
		}
		app[route.method](route.path, polices, require('../api/actions/' + route.action + '.js'))
	})
}