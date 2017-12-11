function metalCraftSectionController ($scope, $http, $location, craftService) {

    $scope.message = 'Metal Crafts';
    $scope.formData = {};
    findAllCraftsByCertainCategory($scope.message);

    function findAllCraftsByCertainCategory(category) {

        $http.get('/postsbycategory/' + category)
            .success(function (data) {
                $scope.posts = data;
                $scope.length = $scope.posts.length;
            })

            .error(function () {
                console.log('Least it did something' + data);
            })
    }

    $scope.delete = function (id) {

        if (confirm("Are you sure you want to delete this Post?")) {
            $http.delete('/deletepost/' + id)
                .success(function (data) {
                    findAllCraftsByCertainCategory($scope.message);
                })

                .error(function (data) {
                    console.log('Error' + data)
                });
        }
    };

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
        $location.path('/update');
    }
}
module.exports = metalCraftSectionController;