var users = require('../../Models/TemporaryUsers');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;
process.env.NODE_ENV = 'test';


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

        it('should return a message if a invalid id is given', function(done){
           chai.request(server)
               .get('/TemporaryUsers/1002')
               .end(function(err, res){
                  expect(res.body).to.have.property('message').equal("Couldn't find user");
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

        it('Should fail if all of userName, email or password is not given', function (done) {
            var user ={
                userName: "",
                email: "",
                password: "",
                bio: "i like cars",
                id: 1234,
                profilePictureRef: ""
            };

            chai.request(server)
                .post('/TemporaryUsers')
                .send(user)
                .end(function (err, res) {
                   expect(res.body).to.have.property('message').equal("User addition failed");
                   done();
                });
        });

        it('should fail if one of the userName, email or password is not given', function (done){
            var user ={
                userName: "Robert",
                email: "robert@gmail.com",
                password: "",
                bio: "i like cars",
                id: 1234,
                profilePictureRef: ""
            };
            chai.request(server)
                .post('/TemporaryUsers')
                .send(user)
                .end(function (err, res) {
                    expect(res.body).to.have.property('message').equal("User addition failed");
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

        it('Should fail when trying to update a users bio who isnt real', function (done) {
            chai.request(server)
                .put('/TemporaryUsers/1003/bio')
                .end(function (err, res) {
                    expect(res.body).to.have.property('message').equal('Bio update failed reason: User doesnt exist');
                    done();
                })
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
        it('Should return the size of the array which should be smaller after an item is deleted', function (done){
            chai.request(server)
                .del('/TemporaryUsers/1000')
                .end(function(err, res){
                   expect(res.body).to.have.property('message').equal('User Deleted');
                   expect(res.body).to.have.property('currentSize').equal(1);
                    done();
                });
        });

        it('Should fail when trying to delete a user which does not exist', function (done){
            chai.request(server)
                .del('/TemporaryUsers/1002')
                .end(function (err, res) {
                    expect(res.body).to.have.property('message').equal('User not deleted');
                    expect(res.body).to.have.property('currentSize').equal(2);
                    done();
                });
        });
    });
});



