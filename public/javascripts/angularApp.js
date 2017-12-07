var app = angular.module('CraftWebApplication', ['ngRoute']);

app.service('craftService', function () {

    var craftService = {
        title: "",
        imageReferences: [],
        infoTitle: "",
        price: "",
        description: "",
        date: "",
        tags: "",
        featured: "false",
        category: "",
        id: ""
    };

    return craftService;

});

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

        .when('/update', {
            templateUrl: 'pages/update.ejs',
            controller: 'updatePageController'
        })

        //sections
        .when('/homecraftsection', {
            templateUrl: 'pages/homecraftsection.ejs',
            controller: 'homeCraftSectionController'
        });



});