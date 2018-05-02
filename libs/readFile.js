const fs = require('fs')
const path = require('path')

module.exports = (pathName) => {
	const filePath = path.join(__dirname, pathName)
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
			if (err) return reject(err)
			resolve(data)
		})
	})
}