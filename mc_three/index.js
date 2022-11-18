const express = require('express')
const app = express()

app.use(express.json())

app.get('/mcthree/status', (req, res) => {
    res.json({ status: 'ok', msg: 'MicroService Three is online'  }).status(200)
})

app.listen(9003, () => {
   console.log('API THREE is running') 
})