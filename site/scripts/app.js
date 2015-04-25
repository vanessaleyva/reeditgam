console.log("#IvanR: Cargo app.js");
var modulo1 = 
	angular.module("reeditgam",[]);
modulo1.controller("mainCtrl",[
	'$scope',
	function($scope){
		$scope.test = "Hola Angular";
		// Modelo
		$scope.posts = 
		[{title: "Post 1", upvotes: 5},
		 {title: "Post 2", upvotes: 15},
		 {title: "Post 3", upvotes: 7},
		 {title: "Post 4", upvotes: 9},
		 {title: "Post 5", upvotes: 3},
		 {title: "Post 6", upvotes: 5}];

		 // Metodo del controlador
		 $scope.addPost = function(){
		 	$scope.posts.push(
		 		{title:"Nuevo Post",
		 		 upvotes: 0});
		 };
	}]);