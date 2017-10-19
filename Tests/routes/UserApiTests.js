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

        while(users.length > 0){
            users.pop();
        }
        users.push({userName: "MaxShannon", email: "maxshannon2016@hotmail.com", password: "howiye123", bio: "hup,derp,hup", id: 1000, profilePictureRef:""});
        users.push({userName: "DaynaEarls", email: "daynaearls@hotmail.com", password: "testtest123", bio: "derpy, herpy, lerpy", id: 1001, profilePictureRef:""});
    });

    describe('GET /TemporaryUsers', function () {
        it('should return all the users in the users array', function (done) {
            chai.request(server)
                .get('/TemporaryUsers')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(2);
                    var result = _.map(res.body, function (user) {
                        return {userName: user.userName, id: user.id};
                    });
                    expect(result).to.include({userName: "MaxShannon", id: 1000});
                    expect(result).to.include({userName: "DaynaEarls", id: 1001});
                    done();
                });
        });
    });
});

