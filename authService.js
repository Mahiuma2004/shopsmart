angular.module('shopSmart')
.factory('authService', function($http) {
  let token = localStorage.getItem('token');
  let user = JSON.parse(localStorage.getItem('user'));

  return {
    login(data) {
      return $http.post('/api/auth/login', data).then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
      });
    },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    getUser() {
      return JSON.parse(localStorage.getItem('user'));
    },
    getToken() {
      return localStorage.getItem('token');
    }
  };
});
