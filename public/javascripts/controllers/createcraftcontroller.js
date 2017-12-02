var app = angular.module('CraftWebApplication');

app.controller('createCraftController', ['$scope', '$http', function ($scope, $http) {

    $scope.message = 'Create Craft page';

    findAllPosts();

    function findAllPosts() {
        $http.get('/posts')
            .success(function (data) {
                $scope.posts = data;
               console.log(data);
            })

            .error(function (data) {
                console.log("least it did something" + data);
            });
    }

}]);