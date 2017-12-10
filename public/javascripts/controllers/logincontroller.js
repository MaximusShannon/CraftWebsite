var app = angular.module('CraftWebApplication');

app.controller('loginController', ['$scope', '$http', '$location', 'userService', function ($scope, $http, $location, userService) {

    $scope.message = 'login Controller';
    $scope.formData = {};
    
    $scope.authenticateUser = function () {

        $http.post('/login',  $scope.formData)
            .success(function (user) {
               userService.userName = user.userName;
               userService.email = user.email;
               userService.password = user.password;
               userService.bio = user.bio;
               userService.profilePictureRef = user.profilePictureRef;
               userService.isLoggedIn = true;
               $location.path('/home')
            }).error(function (data) {
                console.log('Error: ' + data);
        });
    };

}]);