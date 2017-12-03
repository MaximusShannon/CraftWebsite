var app = angular.module('CraftWebApplication');

app.controller('createCraftController', ['$scope', '$location', '$http', function ($scope,$location,$http) {

    $scope.message = 'Create Craft page';
    $scope.formData = {};

    $scope.addCraft = function () {

        $http.post('/addcraft', $scope.formData)
            .success(function (data) {
                $scope.post = data;
                $location.path('/posts');
                console.log(data);
            })
            ._error(function (data) {
                console.log('Error:' + data);
            });
    }


}]);