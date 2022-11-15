const diagnosticsController = require('../controllers/diagnostics')
const express = require('express')
const router = express.Router()

router.post('/create', diagnosticsController.create)
router.get('/get-results/:uuid', diagnosticsController.getResults)

module.exports = router
