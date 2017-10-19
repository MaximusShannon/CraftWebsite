var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Post = require('./PostSchema');

var UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },//we have to hash the password and store it as a hash first
    password: {
        type: String,
        required: true,
    },
    bio: String,
    id: {
        type: Number,
        required: true,
        unique: true
    },
    profilePictureRef: String,

    posts: [Post]

});

module.exports = mongoose.model('User', UserSchema);