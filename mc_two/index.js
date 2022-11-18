const express = require('express')
const app = express()

app.use(express.json())

app.get('/mctwo/status', (req, res) => {
    res.json({ status: 'ok',  msg: 'MicroService Two is online'  }).status(200)
})

app.listen(9002, () => {
   console.log('API TWO is running') 
})