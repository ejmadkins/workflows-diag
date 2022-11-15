const { Firestore } = require('@google-cloud/firestore')
const { v4: uuidv4 } = require('uuid')

// Create a new client
const firestore = new Firestore()

exports.create = async (req, res) => {
    try {
        const uuid = uuidv4()

        // Obtain a document reference.
        const document = firestore.collection('diagnostics-be').doc(uuid)

        // Enter new data into the document.
        await document.set({
            status: 'PENDING',
        })

        // Read the document.
        const doc = await document.get()

        // Wait 20 seconds to simulate an asynchronously obtaining diagnostic results.
        setTimeout(() => {
            document.update({
                errorCode: '1111',
                status: 'COMPLETE',
            })
        }, 120000)

        res.send(uuid)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

exports.getResults = async (req, res) => {
    try {
        console.log('getResults')
        // Get document reference by uuid.
        const document = firestore
            .collection('diagnostics-be')
            .doc(req.params.uuid)

        // Read the document.
        const doc = await document.get()
        console.log(doc.data())

        res.send(doc.data())
    } catch (error) {
        res.status(400).send(error.message)
    }
}
