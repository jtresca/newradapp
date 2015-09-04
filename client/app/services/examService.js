/**
 * Created by william on 9/4/15.
 */
angular.module('radAppApp')
.factory('examFactory', ['$http', function ($http) {
    var ef = {};

    ef.getExamList = function () {
      return $http.get('/api/getExamList');

    };

    ef.getUsers = function () {
      return $http.get('/api/users/me');
      };

    ef.getGradeList = function () {
      return $http.get('/api/getGradeList');
    };

    // return factory object
    return ef;
  }]);
