function createCraftController($scope,$location,$http, userService) {

    $scope.message = 'Create Craft page';
    $scope.formData = {};
    $scope.formData.userId = userService.id;

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


}

module.exports = createCraftController;