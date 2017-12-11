function updatePageController ($scope, $http, $location, craftService) {
     $scope.message = 'hey there now';
     $scope.formData = {};
     $scope.formData = craftService;
     $scope.formData.title = craftService.title;

     $scope.updatePost = function () {

         $http.put('/updatepost/' + craftService.id, $scope.formData)
             .success(function (data) {
                 console.log(data);
                 $location.path('/browsecrafts')
             })

             .error(function (data) {

                 console.log('Error' + data);
             })
     };
 }

 module.exports = updatePageController;