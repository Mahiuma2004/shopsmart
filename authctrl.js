angular.module('shopSmart')
.controller('authCtrl', function($scope, $location, authService) {
  $scope.form = {};
  $scope.login = function() {
    authService.login($scope.form).then(() => {
      $location.path('/');
    });
  };
});
