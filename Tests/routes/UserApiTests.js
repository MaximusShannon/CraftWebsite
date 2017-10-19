var users = require('../../Models/TemporaryUsers');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;


chai.use(chaiHttp);
var _ = require('lodash');
chai.use(require('chai-things'));

describe('Users', function () {
    beforeEach(function () {

        while (users.length > 0) {
            users.pop();
        }
        users.push({
            userName: "MaxShannon",
            email: "maxshannon2016@hotmail.com",
            password: "howiye123",
            bio: "hup,derp,hup",
            id: 1000,
            profilePictureRef: ""
        });
        users.push({
            userName: "DaynaEarls",
            email: "daynaearls@hotmail.com",
            password: "testtest123",
            bio: "derpy, herpy, lerpy",
            id: 1001,
            profilePictureRef: ""
        });
    });

    describe('GET /TemporaryUsers', function () {
        it('should return all the users in the users array', function (done) {
            chai.request(server)
                .get('/TemporaryUsers')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(2);
                    done();
                });
        });
    });
    describe('GET /TemporaryUsers/:id', function () {
        it('should return the user with 1000 as an id', function (done) {
            chai.request(server)
                .get('/TemporaryUsers/1000')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('object');
                    expect(res.body.email).to.equal("maxshannon2016@hotmail.com");
                    expect(res.body.userName).to.equal("MaxShannon");
                    done();
                });
        });
    });

    describe('PUT /TemporaryUsers', function () {
        it('Should update the users bio', function (done) {
            chai.request(server)
                .put('/TemporaryUsers/1000/bio')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Bio updated');
                    done();
                });
        });
    });

    describe('POST /TemporaryUsers', function () {
        it('Should add a new user to the array of users', function (done) {
            var user = {
                userName: "Damon Zund",
                email: "Damo@hotmail.com",
                password: "damon123",
                bio: "i like cars",
                id: 1234,
                profilePictureRef: ""
            };

            chai.request(server)
                .post('/TemporaryUsers')
                .send(user)
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('User Added');
                    expect(res.body).to.have.property('currentSize').equal(3);
                    done();
                });
        });
    });
    //
    describe('DELETE /TemporaryUser/:id', function () {
        it('Should send a message of User Deleted after user has been removed', function (done) {

            chai.request(server)
                .del('/TemporaryUsers/1000')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('User Deleted');
                    done();
                });
        });
    });
});



