const fs = require('fs')
const path = require('path');

module.exports = (pathName) => {
	const dirPath = path.join(__dirname, pathName)
	return new Promise((resolve, reject) => {
		fs.readdir(dirPath, (err, files) => {
			if (err) return reject(err)
			resolve(files)
		})
	})
}