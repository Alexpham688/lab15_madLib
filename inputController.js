var app =angular.module("myModule");
app.controller('inputController',function($scope, myService){
  console.log('form control has loaded');
  $scope.addInput = function(mad) {
    console.log($scope.mad);
    myService.setInputs(mad);
  };


  });
