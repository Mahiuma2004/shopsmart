angular.module('shopSmart')
.controller('mainCtrl', function($scope, productService, authService) {
  $scope.user = authService.getUser();
  $scope.cart = JSON.parse(localStorage.getItem('cart') || '[]');

  $scope.products = [];
  productService.getAll().then(res => {
    $scope.products = res.data;
  });

  $scope.addToCart = function(product) {
    $scope.cart.push(product);
    localStorage.setItem('cart', JSON.stringify($scope.cart));
  };

  $scope.logout = function() {
    authService.logout();
    location.reload();
  };
});
