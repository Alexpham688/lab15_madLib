var app = angular.module('myModule');
app.controller('resultController',function($scope, myService){
  $scope.print=(myService.returnInputs())
  console.log($scope.print)
});
