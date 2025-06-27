angular.module('shopSmart')
.factory('productService', function($http) {
  return {
    getAll() {
      return $http.get('/api/products');
    }
  };
});
