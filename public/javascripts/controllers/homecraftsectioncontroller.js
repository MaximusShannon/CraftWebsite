var app = angular.module('CraftWebApplication');

app.controller('homeCraftSectionController', ['$scope', '$http', function ($scope, $http) {

    $scope.message = 'Home Crafts';
    //$scope.listSize = $scope.posts.keys($scope.post).length;

    findAllCraftsByCertainCategory($scope.message);

    function findAllCraftsByCertainCategory(category){

        $http.get('/postsbycategory/' + category)
            .success(function (data) {
               $scope.posts = data;
               $scope.length = $scope.posts.length;
               console.log(data);
            })

            .error(function () {
                console.log('Least it did something' + data);
            })
    }

    $scope.delete = function (id) {

        if(confirm("Are you sure you want to delete this Post?")){

            $http.delete('/deletepost/' + id)
                .success(function (data) {
                    findAllCraftsByCertainCategory($scope.message);
                })

                .error(function (data) {
                    console.log('Error' + data)
                });
        }
    }

}]);