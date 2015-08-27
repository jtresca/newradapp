'use strict';

angular.module('radAppApp')
.factory('form_factory', ['$http', function ($http) {
	console.log("form_factory.js invoked!");
	var formobject;
	 return {
    getAllUsers : function() {
    	console.log("from get: ", formobject);
      	return formobject;
    },
    setAllUsers : function(param) {
    console.log("I'm in set all users")
    formobject = param;
        if (formobject.score == undefined) {
            formobject.score = 0;
        }
        if (formobject.date == undefined) {
            formobject.date = Date.now();
        }
  		return formobject;
    }, // setAllusers return
    
  } // Returned Factory Object
}]);