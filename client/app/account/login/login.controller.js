'use strict';

angular.module('radAppApp')
  .controller('LoginCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

     console.log('LOGGEDIN: ', Auth.isLoggedIn());

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/exam');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });
