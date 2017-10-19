var users = require('../Models/TemporaryUsers');
var express = require("express");
var router = express.Router();

//********************** Support Functions **********************

function getByValue(arr, id){
    var result = arr.filter(function(t){return t.id == id;})

    return result ? result[0] : null;
}

//********************** Router Functions **********************

router.findAll = function (req, res) {
    res.json(users);
};

router.findOne = function (req, res) {
    var user = getByValue(users, req.params.id);

    if(user != null)
        res.json(user);
    else
        res.json({message: "Couldn't find user"});
};

router.addUser = function (req, res) {
    var id = Math.floor((Math.random() * 1000) + 1);
    var currentSize = users.length;

    users.push({userName: req.body.userName, email: req.body.email, password: req.body.password, bio: req.body.bio, id:id, profilePictureRef: req.body.profilePictureRef });

    if((currentSize+1) == users.length)
        res.json({message: "User Added"});
    else
        res.json({message: "User addition failed"});
};

router.updateProfileBio = function (req, res) {

    var user = getByValue(users, req.params.id);
    var userOldBio = user.bio;

    user.bio = req.body.bio;
    if(userOldBio != user.bio)
        res.json({message: "Bio updated"});
    else
        res.json({message: "Bio update failed."});
};

router.deleteUser = function(req, res){
  var user = getByValue(users, req.params.id);
  var index = users.indexOf(user);

  var currentSize = users.length;
  users.splice(index, 1);

  if((currentSize-1) == users.length)
      res.json({message: 'User Deleted'});
  else
      res.json({message: 'User not deleted'});
};

module.exports = router;