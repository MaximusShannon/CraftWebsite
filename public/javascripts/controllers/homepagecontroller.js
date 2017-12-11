function homePageController($scope, userService) {

    $scope.message = 'name: ' + userService.userName + userService.isLoggedIn;
    $scope.formData = userService;
}

module.exports = homePageController;