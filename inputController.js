var app =angular.module("myModule");
app.controller('inputController',function($scope, myService){
  console.log('form control has loaded');
  $scope.addInputs=function(words) {
    console.log(words);
    myService.setInputs(words);
  }


  });
