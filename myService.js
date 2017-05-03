var app = angular.module("myModule");
app.factory('myService', function(){
  var inputs = {}
  function setInputs(words) {
    inputs = words;
    console.log(inputs);
  };
  function returnInputs(){
    return inputs
  }
  return{
    returnInputs: returnInputs,
    setInputs: setInputs
  }
})
