require('dotenv').config()
const debug = require('debug')('app')

const onListening = () => {
	const bind = typeof process.env.PORT === 'string' ? 'Pipe ' + process.env.PORT : 'Port ' + process.env.PORT
    debug('Listening on ' + bind)
}

const onError = (error) => {
	if (error.syscall !== 'listen')
		throw error

	const bind = typeof process.env.PORT === 'string' ? 'Pipe ' + process.env.PORT : 'Port ' + process.env.PORT

	switch (error.code) {
		case 'EACCES':
			debug(bind + ' requires elevated privileges')
			process.exit(1)
			break
		case 'EADDRINUSE':
			debug(bind + ' is already in use')
			process.exit(1)
			break
		default:
			throw error
	}
}

module.exports = {
	onListening,
	onError
}