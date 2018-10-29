const MongoClient = require('mongodb').MongoClient;

let state = {
    db: null
}

exports.connect = (url, urlParser, done) => {
    if (state.db) {
        return done()
    }

    MongoClient.connect(url, urlParser, (err, db) => {
        if (err) {
            return done(err)
        }
        state.db = db.db('musical-shop')
        done();
    })
}

exports.get = function () {
    return state.db;
}
