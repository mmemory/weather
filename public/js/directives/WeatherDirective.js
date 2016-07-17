angular.module('WeatherApp')
    .directive('weatherDirective', ['WeatherDataService',function(WeatherDataService) {

        return {
            restrict: 'A',
            templateUrl: './templates/WeatherView.html',
            link: function(scope, elem, attrs) {

                WeatherDataService.getSaved()
                    .then(function(data) {
                        scope.savedPlaces = data.data;
                    }, function(err) {
                        console.log('error getting saved profiles', err);
                    });

                scope.getData = function(zip) {
                    WeatherDataService.getWeather(zip)
                        .then(function (data) {
                            scope.weatherData = {
                                temp: WeatherDataService.kelvinToFarenheit(data.data.main.temp),
                                location: data.data.name,
                                weather: data.data.weather[0].description,
                                zip: zip
                            };
                            scope.zipCode = '';
                        }, function (err) {
                            console.error('Error getting weather', err);
                        });
                };

                scope.saveWeather = function(payload) {
                    WeatherDataService.saveProfile(payload)
                        .then(function(data) {
                            scope.savedPlaces.push(data.data);
                            scope.weatherData = null;
                        }, function(err) {
                            console.log('Error saving profile',err);
                        });
                };

                scope.deleteWeather = function(profile) {
                    var index = scope.savedPlaces.indexOf(profile);
                    WeatherDataService.deleteProfile(profile)
                        .then(function(data) {
                            scope.savedPlaces.splice(index, 1);
                        }, function(err) {
                            console.log('error deleting', err);
                        });
                }
            }
        }
    }]);