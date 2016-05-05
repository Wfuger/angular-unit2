angular.module('mathApp', [])
  .controller('mathController', ['$scope', 'mathService', function($scope, mathService){
    $scope.view = {}
    $scope.doSomething = function(operator, firstNum, secondNum) {
      if(operator === 'add') {
        return $scope.view.answer = mathService.add(firstNum, secondNum);
      } else if (operator === 'subtract') {
        return $scope.view.answer = mathService.subtract(firstNum, secondNum);
      } else if (operator === 'divide') {
        return $scope.view.answer = mathService.divide(firstNum, secondNum);
      } else if (operator === 'multiply') {
        return $scope.view.answer = mathService.multiply(firstNum, secondNum);
      } else {
        return $scope.view.answer = mathService.power(firstNum, secondNum);
      }
    }
}])
