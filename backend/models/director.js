const Mongoose = require('mongoose');

const directorSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    oscars: {
        type: Number
    },
    slug: {
        type: String
    }
});

module.exports = Mongoose.model('Director', directorSchema);