var WeatherProfile = require('../models/WeatherProfile.js');

module.exports = {

    getWeather: function(req, res) {
        WeatherProfile.find(function(err, profiles) {
            res.send(profiles);
        });
    },

    createProfile: function(req, res) {

        var newWeatherProfile = req.body;

        var newProfileData = {
            temp: newWeatherProfile.temp,
            location: newWeatherProfile.location,
            weather: newWeatherProfile.weather,
            zip: newWeatherProfile.zip
        };

        var newProfile = new WeatherProfile(newProfileData);

        newProfile.save(function(err, profile) {
            if (err) console.log('error saving profile');

            res.send(profile);
        });

    },

    deleteProfile: function(req, res) {
        WeatherProfile.findByIdAndRemove(req.params.id, function(err, item) {
            if (err) console.log('error finding delete');
            res.send(item);
        });
    }
};