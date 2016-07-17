var mongoose = require('mongoose');

var WeatherProfile = new mongoose.Schema({
    temp: {type: Number},
    location: {type: String},
    weather: {type: String},
    zip: {type: Number}
});

module.exports = mongoose.model('WeatherProfile', WeatherProfile);