function registerUserController ($scope, $location, $http) {

    $scope.message = 'Create User page';
    $scope.formData = {};
    $scope.formData.bio = "";
    $scope.formData.profilePictureRef = "";

    $scope.addUser = function () {

        $http.post('/adduser', $scope.formData)
            .success(function (data) {
                $scope.user = data;
                $location.path('/users');
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
        }
}
module.exports = registerUserController;