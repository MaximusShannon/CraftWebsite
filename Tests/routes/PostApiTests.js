var Post = require('../../Models/PostSchema');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;
var mongoose = require('mongoose');
process.env.NODE_ENV = 'test';

chai.use(chaiHttp);
chai.use(require('chai-things'));


describe('Posts', function () {
   beforeEach(function () {

        Post.remove({}, function (err) {
            if(err)
                done(err);
        });

        var post = new Post();
        post._id = '59f9fb109bd9dc7f544cadfa';
        post.title = 'Test 1';
        post.infoTitle=  'Test 1 Infotitle';
        post.price = 9.99;
        post.description = 'Test 1s description';
        post.date = Date.now();
        post.tags = 'metal, metal crafts';
        post.featured = true;
        post.category= 'Metal Crafts';

       var post2 = new Post();
       post2._id ='59f1e69dd0ae514f10a24a82';
       post2.title = 'Test 2';
       post2.infoTitle=  'Test 2 Infotitle';
       post2.price = 5.99;
       post2.description = 'Test 2s description';
       post2.date = Date.now();
       post2.tags = 'wood, wood crafts';
       post2.featured = true;
       post2.category= 'Wood Crafts';

       post.save(function (err) {
           if(err)
               console.log(err);
       });
       post2.save(function (err) {
           if (err)
               console.log(err);
       });

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

   describe('GET /posts/:id', function () {
       it('Should return the post with 59f9fb109bd9dc7f544cadfa as an id', function (done) {
           chai.request(server)
               .get('/posts/59f9fb109bd9dc7f544cadfa')
               .end(function (err, res) {
                   expect(res.body.category).to.equal("Metal Crafts");
                   expect(res.body.title).to.equal("Test 1");
                   done();
               });
       });

       it('Should fail when an invalid id is given', function (done) {
           chai.request(server)
               .get('/posts/59f9fb109bd9dc7f544')
               .end(function (err, res){
                   expect(res.body).to.have.property('message')
                       .equal("Post not found with id: 59f9fb109bd9dc7f544");
                   done();
               });
       });

   });

   describe('GET /postsbytags/:tags', function (){
      it('Should return the post with the tag wood in the tags property', function (done){
          chai.request(server)
              .get('/postsbytags/wood')
              .end(function (err, res){
                 expect(res.body).to.be.a('array');
                 expect(res.body.length).to.equal(1);
                 expect(res.body[0].title).to.equal('Test 2');
                 expect(res.body[0].category).to.equal('Wood Crafts');
                 done();
              });
      });

      it('Should return a message if the criteria does not meet', function (done){
          chai.request(server)
              .get('/postsbytags/hello')
              .end(function (err, res) {
                  expect(res.body).to.have.property('message').equal("No posts found with tag: hello");
                  done();
              });
      });

   });

    describe('GET /postsbylowerprice/:price', function (){
        it('Should return all the posts lower than the price given', function (done){
            chai.request(server)
                .get('/postsbylowerprice/10.00')
                .end(function (err, res){
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(2);
                    expect(res.body[0]).to.have.property('title').equal("Test 1");
                    expect(res.body[0]).to.have.property('price').equal(9.99);
                    expect(res.body[1]).to.have.property('title').equal("Test 2");
                    expect(res.body[1]).to.have.property('price').equal(5.99);
                    done();
                });
        });
        
        it('Should return no posts because price given is lower than any posts', function (done){
            chai.request(server)
                .get('/postsbylowerprice/2.99')
                .end(function (err, res){
                    expect(res.body).to.have.property('message').equal('No posts found with price lower than: 2.99');
                    done();
                });
        });
    });
});