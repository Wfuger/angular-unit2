angular.module('learningServices', [])
  .controller('firstController', ['$scope', 'firstService', function($scope, firstService){
    $scope.view = {}
    $scope.view.greeting = firstService.sayHi();
    $scope.view.farewell = firstService.sayGoodbye();
}])
