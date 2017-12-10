var app = angular.module('CraftWebApplication');


app.controller('mainController', ['$scope', 'userService', function($scope) {
    // create a message to display in our view
    $scope.message = 'Craft Application - Home for the moment ';




}
]);
