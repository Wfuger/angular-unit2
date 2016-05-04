var app = angular.module('diceApp', [])

app.directive('dice', function() {
    return {
        controller: function($scope) {
            $scope.view = {};
            $scope.view.roll = function() {
                return $scope.view.result = Math.floor(Math.random() * 6) + 1;
            }
        },
        template: '<div class="die" ><h1 ng-bind="view.result"></h1></div>',
        link: function(scope, element, attrs) {
            element.on('mouseenter', function() {
                element.css('cursor', 'pointer')
            })
            element.on('click', function() {
                scope.view.roll();
                scope.$apply();
            })
        }
    }
})
