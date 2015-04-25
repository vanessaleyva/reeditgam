console.log("#IvanR: Cargo app.js");
var modulo1 = 
	angular.module("reeditgam",[]);
modulo1.controller("mainCtrl",[
	'$scope',
	function($scope){
		$scope.test = "Hola Angular";
		$scope.posts = 
		["Post 1 Hola",
		 "Post 2",
		 "Post 3",
		 "Post 4",
		 "Post 5",
		 "Post 6"];
	}]);