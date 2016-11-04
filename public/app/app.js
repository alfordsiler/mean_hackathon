angular.module('VerdictApp', ['ui.router', 'rzModule'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.html',
  })
  // .state('poll', {
  //   url: '/poll',
  //   templateUrl: 'app/views/poll.html',
  //   // controller: 'PollCtrl'
  // })
  .state('randomNum', {
    url: '/randomNum',
    templateUrl: 'app/views/randomNum.html',
    controller: 'RandomNumCtrl'
  })
  .state('8ball', {
    url: '/8ball',
    templateUrl: 'app/views/8ball.html'
    // controller: '8ballCtrl'
  })
  // .state('coinFlip', {
  //   url: '/coinFlip',
  //   templateUrl: 'app/views/coinFlip.html',
    // controller: 'CoinFlipCtrl'
  // })
  .state('wheel', {
    url: '/wheel',
    templateUrl: 'app/views/wheel.html',
  })

  $locationProvider.html5Mode(true);
}]);


