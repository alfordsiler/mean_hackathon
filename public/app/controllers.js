angular.module('VerdictApp')
.controller('RandomNumCtrl', ['$scope', function($scope) {
  console.log("in randomNum controller");
  $scope.slider = {
    minValue: 0,
    maxValue: 1000,
    options: {
        floor: 0,
        ceil: 1000,
        step: 1
    }
  };
  
  $scope.randomNumber = function(min, max){
    console.log("randomNumber")
    return Math.floor(Math.random()*(max-min+1)+min);  
  }

  $scope.getNumber = function(){
    console.log("get Number")
    $scope.number = $scope.randomNumber($scope.slider.minValue, $scope.slider.maxValue);
  }

}]);
