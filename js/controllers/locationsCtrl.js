angular.module('devmtnTravel').controller('locationsC', function($scope,mainSrv){
  $scope.data=mainSrv.travelInfo;

})
