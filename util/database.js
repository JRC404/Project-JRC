const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://node-user:Mdfre1107@cluster0-0cehi.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected!');
            callback(client);
        }).catch(err => {
            console.log(err)
        });
}

module.exports = mongoConnect;