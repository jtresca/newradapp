

angular.module('radAppApp')
  .config(['$routeProvider', function ($routeProvider) {
  	'use strict';
    $routeProvider
      .when('/', {
      	templateUrl: 'app/account/login/login.html',
      	controller: 'LoginCtrl'
      });
  }]);
