var myApp=angular.module("Datos",[]);

myApp.controller("notasController",function($scope){
	$scope.master = {};

	$scope.update = function(user){
	$scope.master = angular.copy(user);

	};

	$scope.reset = function(){
		angular.copy($scope.master, $scope.user);
	};
	$scope.reset();
});