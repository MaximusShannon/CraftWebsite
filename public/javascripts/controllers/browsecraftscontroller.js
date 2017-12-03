var app = angular.module('CraftWebApplication');

app.controller('browseCraftsController', ['$scope', '$http', function($scope, $http){

    $scope.message = 'browse section';
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