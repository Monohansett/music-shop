let express = require('express');
let bodyParser = require('body-parser')

let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let instruments = [
    {
        id: 1,
        name: 'Ibanez'
    },
    {
        id: 2,
        name: 'Washburn'
    },
    {
        id: 3,
        name: "Yamaha"
    }
]

app.get('/', (req, res) => {
    res.send('Hello API')
})

app.get('/instruments', (req, res) => {
    res.send(instruments)
})

app.get('/instruments/:id', (req, res) => {
    let instrument = instruments.find((tool) => {
        return tool.id = Number(req.params.id)
    })
    res.send(instrument)
})

app.post('/instruments', (req, res) => {
    let instrument = {
        id: Date.now(),
        name: req.body.name
    }

    instruments.push(instrument)
    res.send(instrument)
})

app.put('/instruments/:id', (req, res) => {
    let instrument = instruments.find(tool => {
        return tool.id = Number(req.params.id)
    })

    instrument.name = req.body.name;
    res.sendStatus(200)
})

app.delete('/instruments/:id', (req, res) => {
    tools = instruments.filter( tool => {
        return tool.id !== Number(req.params.id)
    })


    res.send(tools)
})

app.listen(3012, () => {
    console.log('Server is running')
})