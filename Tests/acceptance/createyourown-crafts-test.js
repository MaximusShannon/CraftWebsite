var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;

test.describe('Createyourowncrafts Page', function () {
    this.timeout(mochaTimeOut);
    test.before(function () {
        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
        pageSelector = By.id('createyouowncraft');
    });

    test.beforeEach(function () {
        driver.get('http://localhost:3000/#/createyourowncraft');
        driver.wait(until.elementLocated(pageSelector), 2000);
    });

    test.it('shows the main heading', function () {
        driver.findElement(By.tagName('h3')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Please add some of your craft images - Maximum 3')
            });
        });
    });

    test.it('shows the form heading', function () {
        driver.findElement(By.id('formTitle')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Craft Information');
            });
        });

    });

    test.it('shows all the form labels', function () {
        driver.findElement(By.id('categoryLabel')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Craft Category');
            });
        });
        driver.findElement(By.id('categorySelect')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('                            Home Crafts\n                            Wood Crafts\n                            Metal Crafts\n                            Paper Crafts\n                            Fabric Crafts\n                            Other Crafts\n                        ');
            });
        });
        driver.findElement(By.id('craftPriceLabel')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Craft price');
            });
        });
        driver.findElement(By.id('craftDescLabel')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Craft Description');
            });
        });
        driver.findElement(By.id('craftTagsLabel')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Craft Tags');
            });
        });
        driver.findElement(By.id('featuredPostsLabel')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Feature this craft?');
            });
        });
    });

    //come back to this
    test.it('displays the submit button', function () {
        driver.findElement(By.id('submit')).then(function (element) {
            element.getText().then(function (value) {
                expect(value).to.equal('');
            });
        });
    });

    test.it('submit button should work', function () {
       driver.findElement(By.id('craftTitle')).then(function (element) {
           element.sendKeys('Craft Title');
       });
        driver.findElement(By.id('craftSubTitle')).then(function (element) {
            element.sendKeys('Craft Sub Title');
        });
        driver.findElement(By.id('craftPrice')).then(function (element) {
            element.sendKeys(9.99);
        });
        driver.findElement(By.id('craftDesc')).then(function (element) {
            element.sendKeys('Craft description in here');
        });
        driver.findElement(By.id('craftTags')).then(function (element) {
            element.sendKeys('Wood, how about that');
        });
        driver.findElement(By.id('submit')).then(function (element) {
            element.submit();
        });
    });

    test.afterEach(function () {
        driver.manage().deleteAllCookies();
    });

    test.after(function () {
        driver.quit();
    });
});
