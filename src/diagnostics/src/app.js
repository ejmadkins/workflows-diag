const express = require('express')
const cors = require('cors')
const app = express()
const diagnosticsRouter = require('./routes/diagnostics')

app.use(cors())
app.use(express.json())

app.use('/', diagnosticsRouter)

module.exports = app
