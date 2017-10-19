var users = require('../Models/TemporaryUsers');
var express = require("express");
var router = express.Router();

//********************** Support Functions **********************

function getByValue(arr, id){
    var result = arr.filter(function (t) { t.id == id; })
    return result ? result[0] : null;
}

router.findAll = function (req, res) {
    res.json(users);
}

router.findOne = function (req, res) {
    var user = getByValue(users, req.params.id);

    if(user != null)
        res.json(user);
    else
        res.json({message: "Profile Not Found"});
};