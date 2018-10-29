const express = require('express'),
    bodyParser = require('body-parser'),
    db = require('./db'),
    instrumentsController = require('./controllers/instruments');

let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (res) => {
    res.send('API for Mongodb Client')
})

app.get('/instruments', instrumentsController.all);

app.get('/instruments/:id', instrumentsController.findById);

app.post('/instruments', instrumentsController.create)

app.put('/instruments/:id', instrumentsController.update)

app.delete('/instruments/:id', instrumentsController.delete)

db.connect('mongodb://localhost:27017/musical-shop', { useNewUrlParser: true }, (err) => {
    if (err) {
        return console.log(err)
    }

    app.listen(3012, () => {
        console.log('Server is running')
    })
})