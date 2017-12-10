var app = angular.module('CraftWebApplication');

app.controller('homePageController', ['$scope', 'userService', function ($scope, userService) {

    $scope.message = 'name: ' + userService.userName + userService.isLoggedIn;
    $scope.formData = userService;


    console.log("here");



}]);