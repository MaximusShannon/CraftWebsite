var app = angular.module('CraftWebApplication');

app.controller('updatePageController', ['$scope', '$http', 'craftService', function ($scope, $http, craftService) {

    $scope.message = craftService.title;




}]);