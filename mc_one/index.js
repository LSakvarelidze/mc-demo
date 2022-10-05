const express = require('express')
const app = express()

app.use(express.json())

app.get('/status', (req, res) => {
    res.json({ status: 'ok', msg: 'MicroService One is online' }).status(200)
})

app.listen(9001, () => {
   console.log('MC ONE is running') 
})