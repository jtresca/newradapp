'use strict';

angular.module('radAppApp')
  .controller('NavbarCtrl',['$document','$scope', '$location', 'Auth', function ($document, $scope, $location, Auth) {

    // temporary removed nav items
    //{
    //  'title': 'EXAM',
    //  'link': '/exam'
    //},
    //{
    //  'title': 'SETTINGS',
    //  'link': '/settings'
    //},
    $scope.menu = [
      {
        'title': 'LOGOUT',
        'link': '/logout'
      }
    ];

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;

    $scope.logout = function() {
      Auth.logout();
     $location.path('/login');
    };

    $scope.isActive = function(route) {
      var rootPath = $location.path();
      var finalPath = rootPath.split('/')[1];
      finalPath = '/' + finalPath;
      return route === finalPath;

    };

  }]);


