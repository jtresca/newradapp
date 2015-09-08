/**
 * Created by william on 9/7/15.
 */
angular.module('radAppApp')
  .controller('completedCtrl', ['$scope', 'formFactory', '$location', function ($scope, formFactory, $location) {
    var ff = formFactory;
    var vm = this;
    // Initialize passStatus
    $scope.passStatus = undefined;

    // Grad the Score from the formFactory
    $scope.completedExam = ff.completedExam;

    // Log it to the console for my sanity
    console.log('what is da Final Score: '+ $scope.completedExam.score);

    // Check the value of the score to set passStatus to either true or false
    // So that ng-if will display the correct pass or fail message
    if ($scope.completedExam.score > 30 ) {
     $scope.passStatus = true;
    } else {
      $scope.passStatus = false;
    }

    // Next Exam Button takes you back to the exam form
    $scope.beginNewExam = function () {

      $location.path('/exam');
    };



  }]);
