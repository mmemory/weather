angular.module('WeatherApp')
    .directive('weatherDirective', ['WeatherDataService',function(WeatherDataService) {

        return {
            restrict: 'A',
            templateUrl: './templates/WeatherView.html',
            link: function(scope, elem, attrs) {

                scope.getData = function(city) {
                    WeatherDataService.get(city)
                        .then(function (data) {
                            console.log(data);
                        }, function (err) {
                            console.error('Error getting weather', err);
                        });
                }
            }
        }
    }]);