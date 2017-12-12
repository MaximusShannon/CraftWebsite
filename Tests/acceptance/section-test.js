var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;

test.describe('Section Page', function () {
    this.timeout(mochaTimeOut);
    test.before(function () {
        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
        pageSelector = By.id('homesection');

    });

    test.beforeEach(function () {
        driver.get('http://localhost:3000/#/homesection');
        driver.wait(until.elementLocated(pageSelector), 2000);
    });

    test.it('should display the main heading', function () {
        driver.findElement(By.id('heading')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Login to gain access to all features')
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
