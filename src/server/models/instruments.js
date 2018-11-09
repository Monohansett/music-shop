const db = require('../db'),
    objectID = require('mongodb').ObjectID;
const util = require('util')

exports.all = (cb) => {
    db.get().collection('instruments').find().toArray((err, docs) => {
        cb(err, docs);
    })
}

exports.findById = (id, cb) => {
    db.get().collection('instruments').findOne({ _id: objectID(id) }, (err, doc) => {
        cb(err, doc);
    })
}

exports.create = (instument, cb) => {
    db.get().collection('instruments').insertOne(instument, (err, result) => {
        cb(err, result);
    });
};

exports.update = (id, newData, cb) => {
    db.get().collection('instruments').updateOne(
        { _id: objectID(id) },
        newData,
        (err, result) => {
            cb(err, result);
        }
    );
};

exports.delete = (id, cb) => {
    db.get().collection('instruments').deleteOne(
        { _id: objectID(id) },
        (err, result) => {
            cb(err, result);
        }
    );
};