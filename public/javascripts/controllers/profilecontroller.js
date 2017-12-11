function profileController ($scope, $http, $location, craftService, userService) {

    $scope.message = 'login Controller';
    $scope.displayData = userService;

    $scope.getUsersPosts = function () {

        $http.get('/usersposts/' + $scope.displayData._id)
            .success(function (data) {
                $scope.userposts = data;
            })
            .error(function () {

            });

    };

    $scope.delete = function (id) {

        if (confirm("Are you sure you want to delete this Post?")) {

            $http.delete('/deletepost/' + id)
                .success(function (data) {

                })

                .error(function (data) {
                    console.log('Error' + data)
                });
        }
    };


    $scope.updateUser = function (userFromPage) {

        userService.userName = userFromPage.userName;
        userService.email = userFromPage.email;
        userService.bio = userFromPage.bio;

        console.log("craftService.title: " + craftService.title);
        $location.path('/update');
    }

}

module.exports = profileController;