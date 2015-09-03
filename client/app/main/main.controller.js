angular.module('radAppApp')
  .controller('MainCtrl', ['$scope', '$http', '$location', 'formFactory', '$q', 'httpService',
    function ($scope, $http, $location, formFactory, $q, httpService) {
        'use strict';
        var ff = formFactory;
        $scope.hasStarted = ff.examStarted;

      httpService.getStuff('/api/getExamList').success(function (result) {$scope.formArray = result;});
      httpService.getStuff('/api/users/me').success(function (result) {$scope.loggedDetails = result;});
      httpService.getStuff('/api/getGradeList').success(function (result) {
        $scope.GradeListResults = result;
        $scope.SortedGradeList = _.sortBy($scope.GradeListResults, function(it) {
                    return it.evalu;
                });
      });
            

    //FUNCTIONS
    $scope.itteration = 0;
    $scope.studentScore = [];
    $scope.wasHit = false;
    $scope.isDevMode = true;
            
            $scope.preFillDemo = function() {
                $scope.form = {};
                $scope.form.fname = 'John';
                $scope.form.lname = 'Doe';
                $scope.form.semester = 'Q1';
                $scope.form.exam = { 'procedure': 'Chest Routine'};
                $scope.form.site = 'Brookhaven Memorial Hospital';
                $scope.form.year = 'Junior';
                $scope.form.mrn = 345235;
                $scope.form.compType = 'Initial';
                $scope.form.pType = 'Adult';
                $scope.form.gender = 'Male';

            };



            $scope.examButtons = function(id, score) {
                // console.log("id is:",id);
                // console.log("score is:",score);
                $scope.wasHit = true;
                $scope.scoreAddSub = score;
                $scope.idname = id;
            };
            //BEGIN BUTTON
            $scope.formSubmit = function(form) {
                ff.examStarted = true;
                console.log('formSubmit Button Pushed');
                $scope.formdata = angular.copy(form);
                ff.setAllUsers($scope.formdata);
                $location.path('exam/exam_1');
            };

            //CALCULATE SCORE

            $scope.totalScoreSub = function() {
                $scope.valSub = $scope.valAdd;
                $scope.valSub -= $scope.studentScore[$scope.studentScore.length - 1];
                console.log($scope.studentScore[$scope.studentScore.length - 1], 'current SUBTRACT value i');
                console.log($scope.valSub, 'subtracted VALs');
                $scope.valAdd = $scope.valSub;
            };


            $scope.totalScoreAdd = function() {
                $scope.valAdd = 0;
                for (var i = 0; i < $scope.studentScore.length; i++) {
                    console.log('once for each time');
                    $scope.valAdd += $scope.studentScore[i];
                    console.log($scope.studentScore[i], 'current ADD value i');
                    console.log($scope.valAdd, 'added VALs');
                }
            };

            //DATA RETURNED FROM FACTORY
            
            $scope.formreturn = ff.fo;
            $scope.form = ff.fo;


            console.log($scope.itteration + 1, ':Question Number');

            $scope.nextBTN = function() {

                console.log('THIS IS WHAT I HAVE SO FAR:', $scope.formreturn);

                if ($scope.wasHit === false) {
                    console.log('please make a selection!');
                } else if ($scope.itteration === $scope.SortedGradeList.length - 1) {
                    console.log('last exam question!');
                    $scope.idname = undefined; // removes highlight
                    $scope.studentScore.push($scope.scoreAddSub);
                    console.log($scope.studentScore);

                $http.post('api/postStudentResults', $scope.formreturn)
                    .success(function() {
                       console.log('DATA SAVED TO DB! MAKE SURE IT IS VALID');
                }).error(function() {
                     console.log('error with saving data to DB');
                }); 


                    $location.path('exam/'); //CHANGE THIS TO SUMMARY PAGE!!!
                } else {
                    $scope.idname = undefined; // removes highlight
                    $scope.itteration++;
                    $scope.studentScore.push($scope.scoreAddSub);
                    $scope.totalScoreAdd();
                    $scope.formreturn.score = $scope.valAdd;
                    $scope.wasHit = false;

                    console.log($scope.studentScore);
                    // $scope.scoreAddSub = undefined;
                    console.log($scope.itteration + 1, ':Question Number');
                }
            };

            $scope.prevBTN = function() {
                if ($scope.itteration === 0) {
                    $location.path('exam/');
                } else {
                    $scope.idname = undefined; // removes highlight
                    $scope.itteration--;
                    $scope.totalScoreSub();
                    $scope.studentScore.pop();
                    console.log($scope.studentScore);
                    console.log($scope.itteration + 1, ':Question Number');
                    if ($scope.studentScore < 0) {
                        $scope.studentScore = 0;
                    }
                }

            };

        }
    ]);