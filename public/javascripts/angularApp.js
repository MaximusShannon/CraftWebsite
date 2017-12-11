require('angular');
require('angular-route');
var app = angular.module('CraftWebApplication', ['ngRoute']);
require('./controllers/index');

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
           templateUrl: 'public/pages/home.ejs',
           controller : 'homePageController'
        })

        .when('/createyourowncraft', {
            templateUrl: 'public/pages/createyourowncraft.ejs',
            controller: 'createCraftController'
         })

        .when('/browsecrafts', {
            templateUrl: 'public/pages/browsecrafts.ejs',
            controller: 'browseCraftsController'
        })

        .when('/login', {
            templateUrl: 'public/pages/login.ejs',
            controller: 'loginController'
        })

        .when('/registeruser', {
            templateUrl: 'public/pages/registeruser.ejs',
            controller: 'registerUserController'
        })

        .when('/update', {
            templateUrl: 'public/pages/update.ejs',
            controller: 'updatePageController'
        })

        .when('/profile', {
            templateUrl:'public/pages/profile.ejs',
            controller: 'profileController'
        })



        //sections
        .when('/homecraftsection', {
            templateUrl: 'public/pages/sections/homecraftsection.ejs',
            controller: 'homeCraftSectionController'
        })

        .when('/woodcraftsection', {
            templateUrl: 'public/pages/sections/woodcraftsection.ejs',
            controller: 'woodCraftSectionController'
        })

        .when('/metalcraftsection', {
            templateUrl: 'public/pages/sections/metalcraftsection.ejs',
            controller: 'metalCraftSectionController'
        })

        .when('/papercraftsection', {
            templateUrl: 'public/pages/sections/papercraftsection.ejs',
            controller: 'paperCraftSectionController'
        })

        .when('/fabriccraftsection', {
            templateUrl: 'public/pages/sections/fabriccraftsection.ejs',
            controller: 'fabricCraftSectionController'
        })

        .when('/othercraftsection', {
            templateUrl: 'public/pages/sections/othercraftsection.ejs',
            controller: 'otherCraftSectionController'
        });

});