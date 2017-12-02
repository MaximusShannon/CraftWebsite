var app = angular.module('CraftWebApplication', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider


        .when('/',{
           templateUrl: 'pages/home.ejs',
           controller : 'mainController'
        })

        .when('/createyourowncraft', {
            templateUrl: 'pages/createyourowncraft.ejs',
            controller: 'createCraftController'
         })

        .when('/registeruser', {
           templateUrl: 'pages/registeruser.ejs',
            controller: 'registerUserController'
        });

});