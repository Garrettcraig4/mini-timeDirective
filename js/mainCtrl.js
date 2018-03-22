angular.module("app").controller("mainCtrl", function($scope, $interval) {
  $scope.name = "Garrett";
  $scope.time = new Date().toString();
  $interval(() => {
    $scope.time = new Date().toString();
  }, 1000);
});
