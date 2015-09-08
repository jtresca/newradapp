/**
 * Created by william on 9/7/15.
 */
angular.module('radAppApp')
  .controller('completedCtrl', ['$scope', 'formFactory', '$location', function ($scope, formFactory, $location) {
    var ff = formFactory;
    var vm = this;
    $scope.completedExam = ff.completedExam;
    $scope.beginNewExam = function () {

      $location.path('/exam');
    };


  }]);
