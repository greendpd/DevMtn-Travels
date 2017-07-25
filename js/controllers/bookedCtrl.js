angular.module('devmtnTravel').controller('bookedC', function($scope,$stateParams,mainSrv){
  var theId=$stateParams.id;
  var data=mainSrv.packageInfo;
  data.forEach(function(cur,i, arr){
    if(cur.id==theId){
      $scope.city=cur.city;
    }
  })

})
