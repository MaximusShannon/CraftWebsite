var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;

test.describe('Index Page', function () {
    this.timeout(mochaTimeOut);
    test.before(function () {
        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
        pageSelector = By.id('indexPage');

    });

    test.beforeEach(function () {
        driver.get('http://localhost:3000/#/');
        driver.wait(until.elementLocated(pageSelector), 2000);
    });

    test.it('should display the navbar', function () {
        driver.findElement(By.id('navbtn1')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Fertile dreams')
            });
        });
        driver.findElement(By.id('navbtn2')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Browse Crafts')
            });
        });
        driver.findElement(By.id('navbtn3')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Create Your Own Crafts')
            });
        });
        driver.findElement(By.id('navRightBtn1')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Login')
            });
        });
        driver.findElement(By.id('navRightBtn2')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Sign up')
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
