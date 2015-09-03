angular.module('radAppApp')
.factory('formFactory', [function () {
    'use strict';
    var ff = {};

    ff.examStarted = false;

    ff.getAllUsers = function() {
        console.log('from get: ', ff);
        return ff;
    };

    ff.setAllUsers = function(formObject) {
    console.log('I am in set all users');
    ff.fo = formObject;
        if (ff.fo.score === undefined) {
            ff.fo.score = 0;
        }
        if (ff.fo.date === undefined) {
            ff.fo.date = Date.now();
        }
    };
    return ff;
  }]);