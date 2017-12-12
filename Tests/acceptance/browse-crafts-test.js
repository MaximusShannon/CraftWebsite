var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;

test.describe('Browse Crafts Page', function () {
   this.timeout(mochaTimeOut);
   test.before(function () {
       driver = new webdriver.Builder()
         .withCapabilities(webdriver.Capabilities.chrome())
         .build();
       pageSelector = By.id('browseCrafts');
   });

   test.beforeEach(function () {
       driver.get('http://localhost:3000/#/browsecrafts');
       driver.wait(until.elementLocated(pageSelector), 2000);
   });

   test.it('shows the main header', function () {
       driver.findElement(By.tagName('h3')).then(function (element) {
           element.getText().then(function (text) {
               expect(text).to.equal('Sections');
           });
       });
   });

   test.it('shows the home craft polaroid', function () {
       driver.findElement(By.id('polaroid1')).then(function (element) {
           element.getText().then(function (text) {
               expect(text).to.equal('Home Crafts');
           });
       });
       driver.findElement(By.id('polBtn1')).then(function (element) {
           element.getText().then(function (text) {
               expect(text).to.equal('See More..')
           });
       });
   });

    test.it('shows the wood craft polaroid', function () {
        driver.findElement(By.id('polaroid2')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Wood Crafts');
            });
        });
        driver.findElement(By.id('polBtn2')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('See More..')
            });
        });
    });

    test.it('shows the home metal polaroid', function () {
        driver.findElement(By.id('polaroid3')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Metal Crafts');
            });
        });
        driver.findElement(By.id('polBtn3')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('See More..')
            });
        });
    });

    test.it('shows the paper craft polaroid', function () {
        driver.findElement(By.id('polaroid4')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Paper Crafts');
            });
        });
        driver.findElement(By.id('polBtn4')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('See More..')
            });
        });
    });

    test.it('shows the fabric craft polaroid', function () {
        driver.findElement(By.id('polaroid5')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Fabric Crafts');
            });
        });
        driver.findElement(By.id('polBtn5')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('See More..')
            });
        });

    });

    test.it('shows the other craft polaroid', function () {
        driver.findElement(By.id('polaroid6')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Other Crafts');
            });
        });
        driver.findElement(By.id('polBtn6')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('See More..')
            });
        });
    });

    test.it('shows the featured header', function () {
        driver.findElement(By.id('featuredCrafts')).then(function (element) {
            element.getText().then(function (text) {
                expect(text).to.equal('Featured Crafts');
            });
        });
    });

    // I cannot really test the featured
    // polaroids because they are different each time

    test.afterEach(function () {
        driver.manage().deleteAllCookies();
    });

    test.after(function () {
        driver.quit();
    });
});