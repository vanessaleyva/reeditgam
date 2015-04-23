console.log ("#Montse: Cargo app.js");
var modulo1=
	angular.module("reeditgam",[]);
modulo1.controller("mainCtrl",[
	'$scope',
	function($scope){
		$scope.test = "Hola Angular";
		$scope.posts = 
	   [{title: "Post 1", upvotes: 5},
		{title: "Post 2", upvotes: 15},
		{title: "Post 3", upvotes: 7},
		{title: "Post 4", upvotes: 9},
		{title: "Post 5", upvotes: 3},
		{title: "Post 6", upvotes: 5}];
		//Metodo del controlador

		$scope.addPost = function(){
			if (!$scope.title || $scope.title === "")
			{
				alert("NO permite postear titutlos vacios")
				return;
			}
			$scope.posts.push(
			{
				title: $scope.title,
				link: $scope.link,
			 upvotes: 0
			});
			//Two-way data binding
			$scope.title = "";
			$scope.link = "";
		};

		$scope.incrementUpvotes = function(post){
			post.upvotes += 1;
		}
		

	}]);