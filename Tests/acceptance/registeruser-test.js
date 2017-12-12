var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;

test.describe('Registeruser Page', function () {
    this.timeout(mochaTimeOut);
    test.before(function () {
        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
        pageSelector = By.id('registeruser');

    });

    test.beforeEach(function () {
        driver.get('http://localhost:3000/#/registeruser');
        driver.wait(until.elementLocated(pageSelector), 2000);
    });

    test.it('should display the main heading', function () {
        driver.findElement(By.id('heading')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Register today to create your own mini craft shop!')
            });
        });
    });

    test.it('should display all the form labels', function () {
        driver.findElement(By.id('emailLabel')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Email Address')
            });
        });
        driver.findElement(By.id('userNameLabel')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Username')
            });
        });
        driver.findElement(By.id('passwordFirst')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Password')
            });
        });
        driver.findElement(By.id('passwordSecond')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Confirm Password')
            });
        });
    });

    test.it('should allow a user to submit credentials', function () {
        driver.findElement(By.id('email')).then(function (element) {
            element.sendKeys('test@testuser.com');
        });
        driver.findElement(By.id('username')).then(function (element) {
            element.sendKeys('testuser');
        });
        driver.findElement(By.id('password1')).then(function (element) {
            element.sendKeys('testpassword');
        });
        driver.findElement(By.id('password2')).then(function (element) {
            element.sendKeys('testpassword');
        });

        driver.findElement(By.id('submitRegister')).then(function (element) {
            element.submit();
        });
    });

    test.it('should display signin with google button', function () {
        driver.findElement(By.id('twitterBtn')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Continue with Twitter')
            });
        });
    });

    test.it('should display signin with facebook button', function () {
        driver.findElement(By.id('facebookBtn')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Continue with Facebook')
            });
        });
    });

    test.afterEach(function () {
        driver.manage().deleteAllCookies();
    });

    test.after(function () {
        driver.quit();
    });
});
