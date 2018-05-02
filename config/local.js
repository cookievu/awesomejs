require('dotenv').config()
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')

module.exports = (app) => {
	app.use(cookieParser())
	app.use(expressSession({
	    secret: process.env.SESSION_SACRET,
	    resave: false,
	    saveUninitialized: false
	}))
}