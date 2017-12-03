var app = anuglar.module('CraftWebApplication');

app.controller('homeCraftController', ['$scope', '$http', function ($scope, $http) {

    $scope.message = 'Home Crafts'
    findAllHomeCrafts();

    function findAllHomeCrafts(){

        $http.get('/postsbycategory/ ' + 'Home Crafts')
            .success(function (data) {
               $scope.posts = data;
            })

            .error(function () {
                console.log('Least it did something' + data);
            })
    }

}]);