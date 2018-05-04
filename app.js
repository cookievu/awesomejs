const createError = require('http-errors')
const express = require('express')
const app = express()
const helmet = require('helmet')

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const run = require('./bin/run')
run(app)