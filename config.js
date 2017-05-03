var app= angular.module('myModule');
app.config(function($routeProvider){
  $routeProvider.when('/input', {
    templateUrl: 'views/input.html',
    controller:'inputController'
  })
  $routeProvider.when('/input', {
    templateUrl: 'views/display.html',
  controller:'resultController'
  });



});
