# Assignment 2 - Automated development process.

Name: Max Shannon

Student No.:  20067975

## Overview.

Demonstrates the use of webpack, acceptance testing using the selenium-webdriver v 3.4 (newer than suggested),
code quality/linting with code coverage (still in the repo directory),
demonstrates the use of source control and build automation using scripts.


## Environment.

Node
MongoDB
npm install
WebStorm

## Build automation.

I had issues with running the tests when building - this was due to the fact the server wouldn't be running by the time the tests ran.
Please note, the tests for the section-test.js will fail unless i have data in the database - which I didn't have time to deploy the database to heroku.

npm run build:dev // doesn't run the tests properly
npm install
mocha Tests/acceptance

## Acceptance Testing.

[Browse Crafts Image](https://imgur.com/a/JawU8)
Tests/acceptance/browse-crafts-test.js

'''
    √ shows the main header
    √ shows the home craft polaroid (44ms)
    √ shows the wood craft polaroid (46ms)
    √ shows the home metal polaroid (44ms)
    √ shows the paper craft polaroid (44ms)
    √ shows the fabric craft polaroid (44ms)
    √ shows the other craft polaroid (45ms)
    √ shows the featured header
    '''

[Create Crafts Image](https://imgur.com/a/XQ7wX)
Tests/acceptance/createyourown-crafts-test.js
'''
    √ shows the main heading
    √ shows the form heading
    √ shows all the form labels (131ms)
    √ displays the submit button
    √ submit button should work (287ms)
    '''

[Index Page](https://imgur.com/a/pinxm)
Tests/acceptance/index-test.js
'''
    √ should display the navbar (105ms)
    '''

[Login page](https://imgur.com/a/xMa7W)
Tests/acceptance/login-test.js
'''
    √ should display the main heading
    √ should display all the form labels (47ms)
    √ should allow a user to submit credentials (122ms)
    √ should display signin with google button
    '''


This view is not finished
[Profile page](https://imgur.com/a/sJgx9)
'''
    √ should display the three heading (61ms)
    √ should display update button
    '''

[Register User Page](https://imgur.com/a/88WJc)
'''
    √ should display the main heading
    √ should display all the form labels (80ms)
    √ should allow a user to submit credentials (190ms)
    √ should display signin with google button
    √ should display signin with facebook button
    '''

[Section Page](https://imgur.com/a/qrDup)
'''
    √ should display the main heading
    √ should display an Advert (39ms)
    '''

[Update page](https://imgur.com/a/STF6g)
'''
    √ shows the main heading
    √ shows all the form labels (139ms)
    √ displays the submit button
    √ submit button should work (264ms)
    '''

## Continuous Integration.

Not special steps required.
[Travis Account](https://travis-ci.org/MaximusShannon/CraftWebsite)

## Automated Deployment.
No Automated deployment due to errors on heroku i did attempt, but when pushing to heroku master I received build errors
[Error Image](https://imgur.com/a/fHc45)

## Extra features.
