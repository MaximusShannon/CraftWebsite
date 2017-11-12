var users = require('../Models/TemporaryUsers');
var express = require("express");
var router = express.Router();

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
    res.json(users);
};

router.findOne = function (req, res) {
    var user = getByValue(users, req.params.id);

    if(user != null)
        res.json(user);
    else{
        res.json({message: "Couldn't find user"});
    }


};

router.addUser = function (req, res) {
    var id = Math.floor((Math.random() * 1000) + 1);
    var currentSize = users.length;

    if(validateAddUserRequest(req)){
        users.push({userName: req.body.userName, email: req.body.email, password: req.body.password, bio: req.body.bio, id:id, profilePictureRef: req.body.profilePictureRef });
        res.json({message: "User Added", currentSize: users.length});
    }
    else
        res.json({message: "User addition failed"});
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

//test the size of the array and send back the array size
router.deleteUser = function(req, res){
  var user = getByValue(users, req.params.id);
  var index = users.indexOf(user);

  var currentSize = users.length;
  if(user != null)
  users.splice(index, 1);

  if((currentSize-1) == users.length)
      res.json({message: 'User Deleted', currentSize: users.length});
  else
      res.json({message: 'User not deleted',  currentSize: users.length});
};

module.exports = router;