var app = angular.module('CraftWebApplication');

app.controller('homePageController', ['$scope', 'userService', function ($scope, userService) {

    $scope.message = 'name: ' + userService.userName;
    $scope.formData = userService;


    console.log("here");



}]);