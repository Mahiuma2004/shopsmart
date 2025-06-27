angular.module('shopSmart', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'mainCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'authCtrl'
    })
    .when('/cart', {
      templateUrl: 'views/cart.html',
      controller: 'cartCtrl'
    })
    .otherwise({ redirectTo: '/' });
});
