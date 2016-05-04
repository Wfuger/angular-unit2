angular.module('mathApp')
    .directive('math', function() {
        return {
            templateUrl: 'math.html',
            scope: {
                mathStuff: '=mathData'
            }
        };
    })
