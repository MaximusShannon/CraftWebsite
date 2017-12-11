var posts = require('../../Models/TemporaryPosts');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;
var mongoose = require('mongoose');
process.env.NODE_ENV = 'test';


chai.use(chaiHttp);
chai.use(require('chai-things'));

mongoose.connect('mongodb://localhost:27017/craftdatabase');

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error', err)
});

db.once('open', function () {
    console.log('Connection Successful');
});

describe('Posts', function () {
   beforeEach(function () {
        db.posts.drop();

        var post = {
            title: 'Test 1',
            imageReferences: [],
            infoTitle: 'Test 1 Infotitle',
            price: 9.99,
            description: 'Test 1s description',
            date: Date.now(),
            tags: 'metal, metal crafts',
            featured: true,
            category: 'Metal Crafts'
        };
       var post2 = {
           title: 'Test 2',
           imageReferences: [],
           infoTitle: 'Test 2 Infotitle',
           price: 5.99,
           description: 'Test 2s description',
           date: Date.now(),
           tags: 'home, home crafts',
           featured: false,
           category: 'Home Crafts'
       };

        chai.request(server)
            .post('/addcraft/', post);
        chai.request(server)
            .post('/addcraft/', post2);

   });

   describe('GET /posts', function () {
       it('Should get all the posts in the posts the database', function (done) {

           chai.request(server)
               .get('/posts')
               .end(function (err, res) {
                  expect(res.body).to.be.a('array');
                  expect(res.body.length).to.equal(2);
                  done();
               });

       });
   });

   describe('GET /TemporaryPosts/:postId', function () {
       it('Should return the user with 1000 as an id', function (done) {
           chai.request(server)
               .get('/TemporaryPosts/1000')
               .end(function (err, res) {
                   expect(res.body).to.be.a('object');
                   expect(res.body.category).to.equal("Cards");
                   expect(res.body.title).to.equal("Edels Cards");
                   done();
               });
       });

       it('Should fail when an invalid id is given', function (done) {
           chai.request(server)
               .get('/TemporaryPosts/1003')
               .end(function (err, res){
                   expect(res.body).to.have.property('message').equal("Couldn't find post");
                   done();
               });
       });

   });

   describe('GET /TemporaryPostsByTags/:tags', function (){
      it('Should return the post with the tag Cards in the tags property', function (done){
          chai.request(server)
              .get('/TemporaryPostsByTags/Cards')
              .end(function (err, res){
                 expect(res.body).to.be.a('array');
                 expect(res.body.length).to.equal(1);
                 expect(res.body[0]).to.have.property('title').equal("Edels Cards");
                 expect(res.body[0]).to.have.property('tags')
                     .equal("Cards, Birthday, Birthdays, Christmas, deaths, births, wedding");
                 done();
              });
      });

      it('Should return a message if the criteria does not meet', function (done){
          chai.request(server)
              .get('/TemporaryPostsByTags/hello')
              .end(function (err, res) {
                  expect(res.body).to.have.property('message').equal("No posts with these search criteria")
                  done();
              });
      });

   });

    describe('GET /TemporaryPostsByLowerPrice/:price', function (){
        it('Should return all the posts lower than the price given', function (done){
            chai.request(server)
                .get('/TemporaryPostsByLowerPrice/9.99')
                .end(function (err, res){
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(1);
                    expect(res.body[0]).to.have.property('title').equal("Edels Cards");
                    expect(res.body[0]).to.have.property('price').equal(7.99);
                    done();
                });
        });
        
        it('Should return no posts because price given is lower than both posts', function (done){
            chai.request(server)
                .get('/TemporaryPostsByLowerPrice/4.99')
                .end(function (err, res){
                    expect(res.body).to.have.property('message').equal('No Posts Found with price lower than: 4.99')
                    done();
                });
        });
    });
});