const express = require('express');
const bodyParser = require('body-parser')
const mongoClient = require('mongodb').MongoClient;
let objectID = require('mongodb').ObjectID;

let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let db;

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
    res.send('API for Mongodb Client')
})

app.get('/instruments', (req, res) => {
    db.collection('instruments').find().toArray((err, docs) => {
        if (err) {
            console.log(err)
            return res.sendStatus(500)
        }
        res.send(docs)
    })
})

app.get('/instruments/:id', (req, res) => {
    db.collection('instruments').findOne({ _id: objectID(req.params.id) }, (err, doc) => {
        if (err) {
            console.log(err)
            return res.sendStatus(500)
        } 
        res.send(doc)
    })
})

app.post('/instruments', (req, res) => {
    let instrument = {
        name: req.body.name
    }

    db.collection('instruments').insertOne(instrument, (err, result) => {
        if (err) {
            console.log(err)
            return res.sendStatus(500)
        } 
    })
    res.send(instrument)
})

app.put('/instruments/:id', (req, res) => {
    db.collection('instruments').updateOne(
        { _id: objectID(req.params.id) },
        { name: req.body.name },
        (err) => {
            if (err) {
                console.log(err)
                return res.sendStatus(500)
            } 
            res.sendStatus(200)
        }
    )
})

app.delete('/instruments/:id', (req, res) => {
    db.collection('instruments').deleteOne(
        { _id: objectID(req.params.id) },
        (err) => {
            if (err) {
                console.log(err)
                return res.sendStatus(500)
            } 
            res.sendStatus(200)
        }
    )
})

mongoClient.connect('mongodb://localhost:27017/musical-shop', { useNewUrlParser: true }, (err, database) => {
    if (err) {
        return console.log(err)
    }
    db = database.db('musicalShop')

    app.listen(3012, () => {
        console.log('Server is running')
    })
})