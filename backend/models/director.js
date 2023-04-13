const Mongoose = require('mongoose');

const directorSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    oscars: {
        type: Number
    }
});

module.exports = Mongoose.model('Director', directorSchema);