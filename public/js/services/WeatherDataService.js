angular.module('WeatherApp')
    .factory('WeatherDataService', ['$http',function($http) {

        return {
            get: function(city) {
                return $http.get('/api/weather/'+city);
            }
        };
    }]);