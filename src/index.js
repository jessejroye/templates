const express = require ('express')
const app = express()

const config = require('./config.js')
const router = require('./routes/router.js')

const {portNumber} = config.serverDetails()

app.use(router)

app.listen(portNumber,() => {
    console.log('Template server is running on port 3000')
})