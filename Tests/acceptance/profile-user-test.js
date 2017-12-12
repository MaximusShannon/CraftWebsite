var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;

//unfinished page
test.describe('profile page', function () {
    this.timeout(mochaTimeOut);
    test.before(function () {
        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
        pageSelector = By.id('profile');

    });

    test.beforeEach(function () {
        driver.get('http://localhost:3000/#/profile');
        driver.wait(until.elementLocated(pageSelector), 2000);
    });

    test.it('should display the three heading', function () {
        driver.findElement(By.id('head1')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Profile Name:')
            });
        });
        driver.findElement(By.id('head2')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Email:')
            });
        });
        driver.findElement(By.id('head3')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Bio:')
            });
        });
    });

    test.it('should display update button', function () {
        driver.findElement(By.tagName('button')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Update')
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
