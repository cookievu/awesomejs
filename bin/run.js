require('dotenv').config()
const http = require('http')
const createError = require('http-errors');

const normalizePort = require('../libs/normalizePort')
const port = normalizePort(process.env.PORT || 3000)

const { onListening, onError } = require('../libs/runHandler')
const errorHandler = require('../api/responses/errorHandler')

const route = require('./route')
const local = require('../config/local')
const log = require('../config/log')
const static = require('../config/static')
const view = require('../config/view')

module.exports = (app) => {

	app.set('port', port)

	const server = http.Server(app)

	server.listen(port)

	server.on('listening', onListening)
	server.on('error', onError)

	view(app)

	local(app)

	log(app)

	static(app)

	route(app)

	// catch 404 and forward to error handler
	app.use((req, res, next) => next(createError(404)))

	// error handler
	app.use(errorHandler)

}