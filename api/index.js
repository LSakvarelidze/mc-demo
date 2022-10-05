const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(express.json())
const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};

app.use(cors(corsOpts));

app.get('/', (req, res) => {
    res.json({ status: 'ok' }).status(200)
})

app.get('/one', async (req, res) => {
    try {
        const mcOne = await axios.get('http://localhost:9001/status')
        res.status(200).json({
            name: 'MicroService One',
            status: mcOne.data.msg
        })
    } catch {
        res.sendStatus(400)
    }
})

app.get('/two', async (req, res) => {

    try {
        const mcTwo = await axios.get('http://localhost:9002/status')
        res.status(200).json({
            name: 'MicroService Two',
            status: mcTwo.data.msg
        })
    } catch {
        res.sendStatus(400)
    }
})

app.get('/three', async (req, res) => {

    try {
        const mcThree = await axios.get('http://localhost:9003/status')
        res.status(200).json({
            name: 'MicroService Three',
            status: mcThree.data.msg
        })
    } catch {
        res.sendStatus(400)
    }
})


app.listen(9000, () => {
    console.log('API server is running')
})