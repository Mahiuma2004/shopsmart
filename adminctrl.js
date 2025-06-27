angular.module('shopSmart')
.controller('adminCtrl', function($scope, $http, authService) {
  $scope.products = [];
  $scope.orders = [];
  $scope.newProduct = {};

  const config = {
    headers: { Authorization: 'Bearer ' + authService.getToken() }
  };

  function loadProducts() {
    $http.get('/api/products').then(res => $scope.products = res.data);
  }

  function loadOrders() {
    $http.get('/api/orders', config).then(res => $scope.orders = res.data);
  }

  $scope.addProduct = function() {
    $http.post('/api/products', $scope.newProduct, config).then(() => {
      $scope.newProduct = {};
      loadProducts();
    });
  };

  $scope.deleteProduct = function(id) {
    $http.delete('/api/products/' + id, config).then(() => loadProducts());
  };

  $scope.markComplete = function(orderId) {
    $http.put('/api/orders/' + orderId, { status: 'completed' }, config).then(() => loadOrders());
  };

  // On Load
  loadProducts();
  loadOrders();
});
