const Mongoose = require('mongoose');

const directorSchema = new Mongoose.Schema({
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

module.exports = Mongoose.model('Director', directorSchema);