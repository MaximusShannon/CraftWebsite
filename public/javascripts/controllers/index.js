var app = angular.module('CraftWebApplication');

app.controller('browseCraftsController', require ('./browsecraftscontroller'));
app.controller('createCraftController', require ('./createcraftcontroller'));
app.controller('homePageController', require('./homepagecontroller'));
app.controller('loginController', require('./logincontroller'));
app.controller('mainController', require('./maincontroller'));
app.controller('profileController', require('./profilecontroller'));
app.controller('registerUserController', require('./registerusercontroller'));
app.controller('updatePageController', require('./updatepagecontroller'));
//section controllers
app.controller('fabricCraftSectionController', require('./sectioncontrollers/fabriccraftsectioncontroller'));
app.controller('homeCraftSectionController', require('./sectioncontrollers/homecraftsectioncontroller'));
app.controller('metalCraftSectionController', require('./sectioncontrollers/metalcraftsectioncontroller'));
app.controller('otherCraftSectionController', require('./sectioncontrollers/othercraftsectioncontroller'));
app.controller('paperCraftSectionController', require('./sectioncontrollers/papercraftsectioncontroller'));
app.controller('woodCraftSectionController', require('./sectioncontrollers/woodcraftsectioncontroller'));
