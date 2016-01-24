var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');

// Set static folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('It Works!');
});

app.listen(3000);
console.log('Read on port 3000...');