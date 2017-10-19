var users = require('../Models/TemporaryUsers');
var express = require("express");
var router = express.Router();

//********************** Support Functions **********************

function getByValue(arr, id){
    var result = arr.filter(function (t) { t.id == id; })
    return result ? result[0] : null;
}

