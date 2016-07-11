var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

// config
var port = 3001;

// local imports
var WeatherData = require('./api/controllers/WeatherController.js');

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// endpoints
app.get('/api/weather/:cityName', function(req, res) {
    //console.log('REQ', req);
    //console.log('res', res);
    console.log(req.cityName);
    res.send('HELLO');
});

// server
app.listen(port, function() {
    console.log('Listening on port', port);
});