var app = angular.module('CraftWebApplication');

app.controller('browseCraftsController', ['$scope', '$http', function($scope, $http){

    $scope.message = 'browse section';
    findAllPosts();
    getFeaturedPosts();
    $scope.featured = {};


    function findAllPosts() {

        $http.get('/posts')
            .success(function (data) {
                $scope.posts = data;
            })

            .error(function (data) {
                console.log("least it did something" + data);
            });

    }

    function getFeaturedPosts(){

        $http.get('/randomizedfeaturedposts')
            .success(function (featuredData) {
               $scope.featured = featuredData;
               console.log($scope.featured);
            })

            .error(function (data) {
                console.log("least it did something" + data);
            });


    }
}]);