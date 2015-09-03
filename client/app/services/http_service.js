'use strict';
angular.module('radAppApp')
.service('httpService', ['$http', function ($http){
	console.log('httpService invoked!');
	this.getStuff = function (goodies) {
		
		return $http.get(goodies);
        
	};
	
}]);