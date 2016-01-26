var app = angular.module('myApp', []);


/*
app.run(function($rootScope) {
  $rootScope.test = "Ari Lerner Test";
});
*/

app.controller('testController', function($scope) 
{
  $scope.person = 
  {
	name: "Serge Mikhnytsky"
  };
});

app.controller('ParentController', function($scope) {
  $scope.person = {greeted: false};
});

app.controller('ChildController', function($scope) {
  $scope.sayHello = function() {
    $scope.person.greeted = true;
  }
});