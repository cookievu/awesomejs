const path = require('path')

module.exports = (app) => {
	//Set view engine
	app.set('views', path.join(__dirname, '../views'))
	app.set('view engine', 'jade')
}