'use strict';

angular.module('radAppApp')
  .controller('NavbarCtrl',['$scope', '$location', 'Auth', function ($scope, $location, Auth) {
    
    $scope.menu = [
      {
        'title': 'EXAM',
        'link': '/exam'
      },
      {
        'title': 'SETTINGS',
        'link': '/settings'
      },
      {
        'title': 'LOGOUT',
        'link': '/logout'
      }
    ];

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    
    $scope.logout = function() {
      Auth.logout()
     $location.path('/login'); 
    };
    
    $scope.isActive = function(route) {
      var rootPath = $location.path();
      var finalPath = rootPath.split("/")[1];
      finalPath = '/' + finalPath;
      return route === finalPath;

    };
    
  }]);


