const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    oscars: {
        type: Number
    },
    bio:{
        type: String,
        required: true
    },
    slug: {
        type: String
    }
});

module.exports = mongoose.model('Director', directorSchema);