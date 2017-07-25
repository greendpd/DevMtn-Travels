angular.module('devmtnTravel').controller('packagesC', function($scope,$stateParams,mainSrv){
  $scope.data=mainSrv.packageInfo;
  $scope.theFilter=$stateParams.country;
})
