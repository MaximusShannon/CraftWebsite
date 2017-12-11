function loginController ($scope, $http, $location, userService) {

    $scope.message = 'login Controller';
    $scope.gmail = {
        userName: "",
        email: ""
    };
    $scope.formData = {};

    $scope.authenticateUser = function () {

        if ($scope.formData.email !== '' && $scope.formData.password !== '') {

            $http.post('/login', $scope.formData)
                .success(function (user) {
                    userService.userName = user.userName;
                    userService.email = user.email;
                    userService.password = user.password;
                    userService.bio = user.bio;
                    userService.profilePictureRef = user.profilePictureRef;
                    userService.isLoggedIn = true;
                    $location.path('/home')
                }).error(function (data) {
                console.log('Error: ' + data);
            });

        } else {
            console.log('Error Occured');
        }
    };


    $scope.onGoogleLogin = function (googleUser) {
        // var params = {
        //     clientid: '823295775309-vp33qltcp1m6rd92146jev68aiuqa526.apps.googleusercontent.com',
        //     cookiepolicy: 'single_host_origin',
        //     callback: function (result) {
        //         if(result['status']['signed_in']){
        //             var request = gapi.client.plus.people.get(
        //                 {
        //                     userId: 'me'
        //                 }
        //             );
        //             request.execute(function (res) {
        //                 $scope.$apply(function () {
        //
        //                     userService.userName = res.displayName;
        //                     userService.email = res.emails[0].value;
        //                     userService.isLoggedIn = true;
        //                     console.log('HERE WE ARE IN HERE')
        //                     $location.path('/home');
        //                 });
        //             });
        //         }
        //     },
        //     approvalprompt: 'force',
        //     scope: 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
        // }
        //
        // gapi.auth.signIn(params);

        var params = {
            clientid: '823295775309-vp33qltcp1m6rd92146jev68aiuqa526.apps.googleusercontent.com'
        }

        gapi.auth2.init(params)

    }
}

module.exports = loginController;