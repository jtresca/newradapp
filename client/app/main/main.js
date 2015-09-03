'use strict';

angular.module('radAppApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
      	templateUrl: 'app/account/login/login.html',
      	controller: 'LoginCtrl'
      });
  }]);