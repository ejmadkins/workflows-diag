// Imports the Google Cloud client library
const express = require('express')
const app = express()
app.use(express.json())

// Simulates a long running job to initiate retries from the client.
app.post('/', async (req, res) => {
    try {
        setTimeout(() => {
            res.json({
                validated: true,
            })
        }, 60000)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = app
