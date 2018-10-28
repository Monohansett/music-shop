const express = require('express'),
    bodyParser = require('body-parser'),
    objectID = require('mongodb').ObjectID;

let db = require('./db');
let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (res) => {
    res.send('API for Mongodb Client')
})

app.get('/instruments', (res) => {
    db.get().collection('instruments').find().toArray((err, docs) => {
        if (err) {
            console.log(err)
            return res.sendStatus(500)
        }
        res.send(docs)
    })
})

app.get('/instruments/:id', (req, res) => {
    db.get().collection('instruments').findOne({ _id: objectID(req.params.id) }, (err, doc) => {
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

    db.get().collection('instruments').insertOne(instrument, (err, result) => {
        if (err) {
            console.log(err)
            return res.sendStatus(500)
        }
    })
    res.send(instrument)
})

app.put('/instruments/:id', (req, res) => {
    db.get().collection('instruments').updateOne(
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
    db.get().collection('instruments').deleteOne(
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

db.connect('mongodb://localhost:27017/musical-shop', { useNewUrlParser: true }, (err) => {
    if (err) {
        return console.log(err)
    }

    app.listen(3012, () => {
        console.log('Server is running')
    })
})