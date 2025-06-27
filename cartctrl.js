angular.module('shopSmart')
.controller('cartCtrl', function($scope, orderService) {
  $scope.cart = JSON.parse(localStorage.getItem('cart') || '[]');

  $scope.total = function() {
    return $scope.cart.reduce((sum, p) => sum + p.price, 0);
  };

  $scope.checkout = function() {
    orderService.placeOrder($scope.cart).then(() => {
      alert("Order placed!");
      $scope.cart = [];
      localStorage.removeItem('cart');
    });
  };
});
