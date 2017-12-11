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

app.service('userService', function () {

    var userService = {
        userName: "",
        email: "",
        password: "",
        bio: "",
        profilePictureRef: "",
        isLoggedIn: false
    };

    return userService;
});

app.config(function ($routeProvider) {
    $routeProvider



        .when('/home',{
           templateUrl: 'pages/home.ejs',
           controller : 'homePageController'
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

        .when('/profile', {
            templateUrl:'pages/profile.ejs',
            controller: 'profileController'
        })



        //sections
        .when('/homecraftsection', {
            templateUrl: 'pages/sections/homecraftsection.ejs',
            controller: 'homeCraftSectionController'
        })

        .when('/woodcraftsection', {
            templateUrl: 'pages/sections/woodcraftsection.ejs',
            controller: 'woodCraftSectionController'
        })

        .when('/metalcraftsection', {
            templateUrl: 'pages/sections/metalcraftsection.ejs',
            controller: 'metalCraftSectionController'
        })

        .when('/papercraftsection', {
            templateUrl: 'pages/sections/papercraftsection.ejs',
            controller: 'paperCraftSectionController'
        })

        .when('/fabriccraftsection', {
            templateUrl: 'pages/sections/fabriccraftsection.ejs',
            controller: 'fabricCraftSectionController'
        })

        .when('/othercraftsection', {
            templateUrl: 'pages/sections/othercraftsection.ejs',
            controller: 'otherCraftSectionController'
        });






});