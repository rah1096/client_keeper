var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('clientkeeper', ['clients']);

// Set static folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/clients', function(req, res) {
    console.log('Request for clients recieved...');

    db.clients.find().sort({first_name: 1}, function(err, docs) {
        if (err) {
            res.send(err);
        } else {
            console.log('Sending Data...');
            res.json(docs);
        }
    });
});

app.post('/clients', function(req, res) {
    db.clients.insert(req.body, function(err, doc) { //make sure to have the body-parser
        if (err) {
            res.send(err);
        } else {
            console.log('Client Added');
            res.json(doc);
        }
    });

});

app.listen(3000);
console.log('Read on port 3000...');