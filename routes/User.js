var users = require('../Models/TemporaryUsers');
var express = require("express");
var router = express.Router();
var User = require('../Models/User');


//********************** Support Functions **********************

function getByValue(arr, id){
    var result = arr.filter(function(t){return t.id == id;})

    return result ? result[0] : null;
}

function validateAddUserRequest(req) {
    var flag;

    if (req.body.userName == "" || req.body.email == "" || req.body.password == "")
        flag = false;
    else
        flag = true;

    return flag;
}

//********************** Router Functions **********************

router.findAll = function (req, res) {

    User.find(function (err, users) {
        if(err)
            res.send(err);
        else
            res.json(users);

    });

};

router.findOne = function (req, res) {

    User.find({"_id": req.parms.id}, function (err, user) {

        if(err)
            res.json({message: 'User with id: ' + req.params.id + ' not found!'});
        else
            res.json(user);

    });

};

router.addUser = function (req, res) {

    var user = new User();
    user.userName = req.body.userName;
    user.email = req.body.email;
    user.password = user.generateHash(req.body.password);
    user.bio = req.body.params;
    user.profilePictureRef = req.body.profilePictureRef;

    user.save(function (err) {

        if(err)
            res.send(err);

    });

};

router.updateProfileBio = function (req, res) {

    var user = getByValue(users, req.params.id);

    if(user != null){
        user.bio = req.body.bio;
        res.json({message: "Bio updated"});
    }
    else
        res.json({message: "Bio update failed reason: User doesnt exist"});

};


router.deleteUser = function(req, res){

    User.findByIdAndRemove(req.params.id, function (err) {
        if(err)
            res.send(err);
        else
            res.json({message: 'User deleted'})
    });

};

module.exports = router;