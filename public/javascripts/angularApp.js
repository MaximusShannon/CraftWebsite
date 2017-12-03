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

        .when('/browsecrafts', {
            templateUrl: 'pages/browsecrafts.ejs',
            controller: 'browseCraftsController'
        })

        .when('/login', {
            templateUrl: 'pages/login.ejs',
            controller: 'loginController'
        })

        .when('/registeruser', {
            templateUrl: 'pages/registeruser.ejs',
            controller: 'registerUserController'
        })

        //sections
        .when('/homecraftsection', {
            templareUrl: 'pages/homecraftsection.ejs',
            controller: 'homeCraftController'
        })



});