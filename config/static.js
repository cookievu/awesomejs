const path = require('path')
const express = require('express')

module.exports = (app) => {
	//set static file folder
	app.use(express.static(path.join(__dirname, '../public')))
}