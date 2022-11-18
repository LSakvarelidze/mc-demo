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

app.get('/api', (req, res) => {
    res.json({ status: 'ok' }).status(200)
})

app.get('/api/one', async (req, res) => {
    try {
        const mcOne = await axios.get('http://mcdemo-one-svc.lsakvarelidze.svc.cluster.local:9001/status')
        res.status(200).json({
            name: 'MicroService One',
            status: mcOne.data.msg
        })
    } catch {
        res.sendStatus(400)
    }
})

app.get('/api/two', async (req, res) => {

    try {
        const mcTwo = await axios.get('http://mcdemo-two-svc.lsakvarelidze.svc.cluster.local:9002/status')
        res.status(200).json({
            name: 'MicroService Two',
            status: mcTwo.data.msg
        })
    } catch {
        res.sendStatus(400)
    }
})

app.get('/api/three', async (req, res) => {

    try {
        const mcThree = await axios.get('http://mcdemo-three-svc.lsakvarelidze.svc.cluster.local:9003/status')
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