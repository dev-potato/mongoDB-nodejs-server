var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

    
MongoClient.connect('mongodb://localhost:27017/video', function(err, database) {
    assert.equal(null, err);
    console.log('Successfully connected to server');

    // Find some documents in our collection
    var db = database.db('video');
    db.collection('movies').find({}).toArray(function(err, docs){

        //print the title of each document in the result set
        docs.forEach(function(doc) {
            console.log(doc.title)
        });
        database.close();
    });
    console.log("Called Find()");
});