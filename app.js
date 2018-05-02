const createError = require('http-errors');
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const run = require('./bin/run')
run(app)