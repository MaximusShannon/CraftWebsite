var app = angular.module('CraftWebApplication');

app.controller('woodCraftSectionController', ['$scope', '$http', '$location', 'craftService', function ($scope, $http, $location, craftService) {

    $scope.message = 'Wood Crafts';
    //$scope.listSize = $scope.posts.keys($scope.post).length;
    $scope.formData = {};

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

    $scope.updatePost = function (postFromPage) {

        craftService.title = postFromPage.title;
        craftService.imageReferences.push(postFromPage);
        craftService.infoTitle = postFromPage.infoTitle;
        craftService.price = postFromPage.price;
        craftService.description = postFromPage.description;
        craftService.date = postFromPage.date;
        craftService.tags = postFromPage.tags;
        craftService.featured = postFromPage.featured;
        craftService.category = postFromPage.category;
        craftService.id = postFromPage._id;

        console.log("craftService.title: " + craftService.title);
        $location.path('/update');
    }

}]);