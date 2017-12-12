var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;

test.describe('login Page', function () {
    this.timeout(mochaTimeOut);
    test.before(function () {
        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
        pageSelector = By.id('loginBody');

    });

    test.beforeEach(function () {
        driver.get('http://localhost:3000/#/login');
        driver.wait(until.elementLocated(pageSelector), 2000);
    });

    test.it('should display the main heading', function () {
        driver.findElement(By.id('heading')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Login to gain access to all features')
            });
        });
    });

    test.it('should display all the form labels', function () {
        driver.findElement(By.id('emailLabel')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Email Address')
            });
        });
        driver.findElement(By.id('passwordLabel')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Password')
            });
        });
    });

    test.it('should allow a user to submit credentials', function () {
        driver.findElement(By.id('email')).then(function (element) {
            element.sendKeys('maxshannon2016@hotmail.com');
        });
        driver.findElement(By.id('password')).then(function (element) {
            element.sendKeys('bubbles123');
        });
        driver.findElement(By.id('submitLogin')).then(function (element) {
            element.submit();
        });
    });

    test.it('should display signin with google button', function () {
        driver.findElement(By.tagName('button')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Continue with Google')
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
