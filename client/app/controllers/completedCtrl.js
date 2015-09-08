/**
 * Created by william on 9/7/15.
 */
angular.module('radAppApp')
  .controller('completedCtrl', ['$scope', 'formFactory', function ($scope, formFactory) {
    var ff = formFactory;
    var vm = this;
    $scope.completedExam = ff.completedExam;


  }]);
