var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// config
var port = 3001;

// db
var mongoUri = 'mongodb://localhost/weather-app';
mongoose.connect(mongoUri);

// local imports
var WeatherController = require('./api/controllers/WeatherController.js');

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// endpoints
app.get('/api/weather/places', WeatherController.getWeather);
app.post('/api/weather/places',WeatherController.createProfile);
app.delete('/api/weather/places/:id', WeatherController.deleteProfile);

// server
app.listen(port, function() {
    console.log('Listening on port', port);
});