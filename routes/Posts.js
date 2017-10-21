var posts = require('../Models/TemporaryPosts');
var express = require('express');
var router = express.Router();
var fuzzy = require('fuzzy');

var _ = require('lodash');

//********************** Support Functions **********************

function getByValue(arr, id){
    var result = arr.filter(function(t){return t.id == id;});

    return result ? result[0] : null;
}


//********************** Router Functions **********************

router.findAllPosts = function (req, res) {
    res.json(posts);
};

router.findAllPostsByTag = function (req, res) {
    var postsWithTag = [];
    var searchTag = req.params.tags;

    for(var i = 0; i < posts.length; i++){
        var currentTags = posts[i].tags;

        if(currentTags.indexOf(searchTag) != -1)
            postsWithTag.push(posts[i]);
    }

    if(postsWithTag.length != 0)
        res.json(postsWithTag);
    else
        res.json({message: "No users with these search criteria"});
};

router.findAllLessThanPrice = function (req, res) {
    var pricesMatched = [];
    var priceRequest = req.params.price;

    for(var i = 0; i < posts.length; i++){

        if(posts[i].price < priceRequest)
            pricesMatched.push(posts[i])
    }

    if(pricesMatched.length > 0)
        res.json(pricesMatched);
    else
        res.json({message: 'No Posts Found'});
};

// router.findCategoryFuzzySearch = function (req, res) {
//     //var postsMatchVsFuzzy = [];
//     var searchCriteria = req.params.category;
//
//     var results = fuzzy.filter(searchCriteria, posts);
//     console.log(results);
// };

module.exports = router;