angular.module('radAppApp')
.factory('formFactory', [function () {
    'use strict';
    var ff = {};

    ff.examStarted = false;

    ff.getAllUsers = function() {
        console.log('from get: ', ff);
        return ff;
    };

    ff.setAllUsers = function(formFromExamForm) {
    console.log('I am in set all users');
    var fo = formFromExamForm;
        if (fo.score === undefined) {
            fo.score = 0;
        }
        if (fo.date === undefined) {
            fo.date = Date.now();
        }
      return fo;
    };
    return ff;
  }]);