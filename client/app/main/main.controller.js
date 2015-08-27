'use strict';

angular.module('radAppApp')
  .controller('MainCtrl', ['$scope', '$http', '$location', 'form_factory', '$q', 'httpService',
    function ($scope, $http, $location, form_factory, $q, httpService) {
      httpService.getStuff('/api/getExamList').success(function (result) {$scope.formArray = result;});
      httpService.getStuff('/api/users/me').success(function (result) {$scope.loggedDetails = result;});
      httpService.getStuff('/api/getGradeList').success(function (result) {
        $scope.GradeListResults = result;
        $scope.SortedGradeList = _.sortBy($scope.GradeListResults, function(it) {
                    return it.eval;
                });
      });
            

    //FUNCTIONS
    $scope.itteration = 0;
    $scope.studentScore = [];
    $scope.wasHit = false;

            $scope.examButtons = function(id, score) {
                // console.log("id is:",id);
                // console.log("score is:",score);
                $scope.wasHit = true;
                $scope.scoreAddSub = score;
                $scope.idname = id;
            };
            //BEGIN BUTTON
            $scope.formSubmit = function(form) {
                console.log("formSubmit Button Pushed");
                $scope.formdata = angular.copy(form);
                form_factory.setAllUsers($scope.formdata);
                console.log("form_factory.setAllUsers($scope.formdata): " + form_factory.setAllUsers($scope.formdata));
                $location.path('exam/exam_1');
            };

            //CALCULATE SCORE

            $scope.totalScoreSub = function() {
                $scope.valSub = $scope.valAdd;
                $scope.valSub -= $scope.studentScore[$scope.studentScore.length - 1];
                console.log($scope.studentScore[$scope.studentScore.length - 1], "current SUBTRACT value i");
                console.log($scope.valSub, "subtracted VALs");
                $scope.valAdd = $scope.valSub;
            };


            $scope.totalScoreAdd = function() {
                $scope.valAdd = 0;
                for (var i = 0; i < $scope.studentScore.length; i++) {
                    console.log("once for each time");
                    $scope.valAdd += $scope.studentScore[i];
                    console.log($scope.studentScore[i], "current ADD value i");
                    console.log($scope.valAdd, "added VALs");
                }
            };

            //DATA RETURNED FROM FACTORY
            $scope.formreturn = form_factory.getAllUsers();

            //PROMISE

            var defer = $q.defer();

            defer.promise.then(function() {
                $scope.form = $scope.formreturn;
            });

            defer.resolve();

            console.log($scope.itteration + 1, ":Question Number");

            $scope.nextBTN = function() {

                console.log("THIS IS WHAT I HAVE SO FAR:", $scope.formreturn);

                if ($scope.wasHit == false) {
                    console.log("please make a selection!");
                } else if ($scope.itteration == $scope.SortedGradeList.length - 1) {
                    console.log("last exam question!");
                    $scope.idname = undefined; // removes highlight
                    $scope.studentScore.push($scope.scoreAddSub);
                    console.log($scope.studentScore);

                $http.post("api/postStudentResults", $scope.formreturn)
                    .success(function(data, status, headers, config) {
                       console.log("DATA SAVED TO DB! MAKE SURE IT IS VALID")
                }).error(function(data, status, headers, config) {
                     console.log("error");
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
                    console.log($scope.itteration + 1, ":Question Number");
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
                    console.log($scope.itteration + 1, ":Question Number");
                    if ($scope.studentScore < 0) {
                        $scope.studentScore = 0;
                    }
                }

            };

        }
    ]);