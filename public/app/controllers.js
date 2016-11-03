angular.module('VerdictApp')
.controller('RandomNumCtrl', ['$scope', function($scope) {
  console.log("in controller")
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

// .controller('HomeCtrl', ['$scope', 'AirplaneService', function($scope, AirplaneService) {
//   $scope.airplanes = [];
//   $scope.newAirplane = {
//     manufacturer: '',
//     model: '',
//     engines: '',
//     image: ''
//   }

//   // Load all of the airplanes when the page first loads.
//   getAllAirplanes();

//   $scope.createAirplane = function() {
//     AirplaneService.addAirplane($scope.newAirplane, function(res) {
//       AirplaneService.getAllAirplanes(function(data) {
//         $scope.airplanes = data.data;
//       });
//     });
//   }

//   $scope.deleteAirplane = function(airplane) {
//     AirplaneService.deleteAirplane(airplane, function(res) {
//       getAllAirplanes();
//     });
//   };

//   function getAllAirplanes() {
//     AirplaneService.getAllAirplanes(function success(res) {
//       console.log("here is the res.data: ", res.data);
//       $scope.airplanes = res.data;
//     }, function error(res) {
//       console.log(res);
//     });
//   }

//   $scope.searchAirplanes = function(searchTerm) {
//     console.log('seach button');
//     searchTerm = searchTerm.toLowerCase();
//       console.log(searchTerm);
//       $scope.airplanes.filter(function(result){
//         return result.toLowerCase().indexOf(searchTerm) !== -1;
//       });
//     };

// }])
// .controller('AirplaneCtrl', ['$scope', '$stateParams', '$state', 'AirplaneService',
//     function($scope, $stateParams, $state, AirplaneService) {
//   $scope.airplane = {
//     manufacturer: '',
//     model: '',
//     engines: '',
//     image: ''
//   };

//   var id = $stateParams.id;
//   AirplaneService.getAirplane(id, function(res) {
//     $scope.airplane = res.data;
//   });

//   $scope.updateAirplane = function() {
//     AirplaneService.updateAirplane($scope.airplane, function(res) {
//       $state.go('airplane', {id: $scope.airplane._id});
//     });
//   }
// }]);
