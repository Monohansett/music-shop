let Instruments = require('../models/instruments');

exports.all = (req, res) => {
    Instruments.all((err, docs) => {
        if (err) {
            console.log(err)
            return res.sendStatus(500)
        }
        res.send(docs)
    })
}

exports.findById = (req, res) => {
    Instruments.findById(req.params.id, (err, doc) => {
        if (err) {
            console.log(err)
            return res.sendStatus(500)
        }
        res.send(doc)
    })
}

exports.create = (req, res) => {
    let instrument = {
        name: req.body.name
    };
    Instruments.create(instrument, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(instrument);
    });
};

exports.update = (req, res) => {
    Instruments.update(
        req.params.id,
        { $set: { name: req.body.name } },
        (err, result) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    );
};

exports.delete = (req, res) => {
    Instruments.delete(req.params.id, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(req.params);
    }
    );
};