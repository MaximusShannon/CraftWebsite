
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('../Models/PostSchema');



//********************** Mongo Connection ********************** //

mongoose.connect('mongodb://localhost:27017/craftdatabase');

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error', err)
});

db.once('open', function () {
   console.log('Connection Successful');
});





//********************** Support Functions ********************** //

function findAllPostsByTagGiven(allPosts, searchTag){

    var postsWithTag = [];
    var comparitiveTag;

    for(var i = 0; i < allPosts.length; i++){
        comparitiveTag = allPosts[i].tags.toLowerCase();

        if(comparitiveTag.indexOf(searchTag) != -1)
            postsWithTag.push(allPosts[i]);
    }

    return postsWithTag;

}

function findAllPostsLowerThanPriceGiven(allPosts, searchPrice){
     
    var postsWithRequiredPrice = [];

    for(var i = 0; i < allPosts.length; i++){
        if(allPosts[i].price < searchPrice)
            postsWithRequiredPrice.push(allPosts[i])

    }

    return postsWithRequiredPrice;

}

function selectRandomizedFeaturedPosts(allPosts){

    var randomFeatured = [];
    var counter = 0;

    for(var i = 0; counter <= 3; i++){
        var rand = allPosts[Math.floor(Math.random() * allPosts.length)];
        if(rand.featured){
            randomFeatured.push(rand);
            counter++
        }

        if(i > 100)
            break;
    }

    return randomFeatured;
}

function findAllPostsByCategory(allPosts, category){

    var postsMatched = [];

    for(var i = 0; i < allPosts.length; i++){

        if(allPosts[i].category === category)
            postsMatched.push(allPosts[i]);
    }

    return postsMatched;
}



//********************** Router Functions **********************

router.findAllPosts = function (req, res) {

    Post.find(function (err, posts) {
        if(err)
            res.send(err);

        res.json(posts);
    });

};

router.findOne = function (req, res) {

    Post.find({"_id": req.params.id}, function (err, post) {

        if(err)
            res.json({message: 'Post not found with id: ' +  req.params.id});
        else
            res.json(post);
    });

};



// Post filtering endpoints

router.findAllPostsByTag = function (req, res) {

    Post.find(function(err, posts){
        console.log(posts[1].price);

       var postsFound = findAllPostsByTagGiven(posts, req.params.tags.toLowerCase());
       if(postsFound.length !== 0)
           res.json(postsFound);
       else
           res.json({message: 'No posts found with tag: ' + req.params.tags})

    });

};

router.findAllLessThanPrice = function (req, res) {

    Post.find(function (err, posts){

        var postsFound = findAllPostsLowerThanPriceGiven(posts, req.params.price);
        if(postsFound.length !== 0)
            res.json(postsFound);
        else
            res.json({message: 'No posts found with price lower than: ' + req.params.price})
    });

};

router.findRandomizedFeaturedPosts = function (req, res) {

    Post.find(function (err, posts) {

        if(err)
            res.json(err);

        res.json(selectRandomizedFeaturedPosts(posts))
    })

};

router.findAllCraftsByCertainCategory = function (req, res) {

    Post.find(function (err, posts) {

        if(err)
            res.json(err);

        res.json(findAllPostsByCategory(posts, req.params.category));

    });

};



//Post add endpoints

router.addCraft = function (req, res) {

    var craft = new Post();
    craft.title = req.body.title;
    craft.infoTitle = req.body.infoTitle;
    craft.price = req.body.price;
    craft.description = req.body.description;
    craft.tags = req.body.tags;
    craft.featured = req.body.featured;
    craft.category = req.body.category;

    craft.save(function (err) {
        if(err)
            res.send(err);
        else
            res.send({message: 'Craft Created', data: craft});



    });

};

// router.findCategoryFuzzySearch = function (req, res) {
//     //var postsMatchVsFuzzy = [];
//     var searchCriteria = req.params.category;
//
//     var results = fuzzy.filter(searchCriteria, posts);
//     console.log(results);
// };

router.deletePost = function (req, res) {

  Post.findByIdAndRemove(req.params.id, function (err) {

      if(err)
          res.json(err);
      else
          res.json({message: 'Post Deleted', data: Post});
  })
};




module.exports = router;