angular.module('WeatherApp')
    .factory('WeatherDataService', ['$http',function($http) {

        return {
            getSaved: function() {
                return $http.get('/api/weather/places');
            },

            getWeather: function(zip) {
                return $http.get('http://api.openweathermap.org/data/2.5/weather?zip='+zip+',us&APPID=11fed745e196a1af35771692ffbb07f9');
            },

            saveProfile: function(data) {
                return $http.post('/api/weather/places',data)
            },

            deleteProfile: function(data) {
                return $http.delete('/api/weather/places/' + data._id);
            },

            kelvinToFarenheit: function(temp) {
                return 1.8 * (temp - 273) + 32;
            }
        };
    }]);