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

}]);