angular.module('WeatherApp')
    .directive('weatherDirective', ['WeatherDataService',function(WeatherDataService) {

        return {
            restrict: 'A',
            templateUrl: './templates/WeatherView.html',
            link: function(scope, elem, attrs) {

                WeatherDataService.get()
                    .then(function(data) {
                        console.log(data);
                        scope.test = data.data;
                    }, function(err) {
                        console.error('Error getting weather',err);
                    });
            }
        }
    }]);