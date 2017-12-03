var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageReferences: [{
        image1: String,
        image2: String,
        image3: String,
        image4: String,
        image5: String
    }],
    infoTitle: String,
    price: Number,
    description: String,
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    tags: {
        type: String
    },
    featured: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Post', PostSchema);