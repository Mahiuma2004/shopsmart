angular.module('shopSmart')
.factory('orderService', function($http, authService) {
  return {
    placeOrder(cart) {
      return $http.post('/api/orders', { items: cart }, {
        headers: { Authorization: 'Bearer ' + authService.getToken() }
      });
    }
  };
});
