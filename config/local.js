require('dotenv').config()
const session = require('cookie-session')

module.exports = (app) => {

	app.use(session({
		name: 'isadfsdff3fsdf_cs',
		keys: [process.env.SESSION_SACRET],
		maxAge: 24 * 60 * 60 * 1000 // 24 hours
	}))
}