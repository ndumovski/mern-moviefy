const Mongoose = require('mongoose');
const mongoose = require('mongoose');

const movieSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    releaseYear: {
        type: Number,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    director: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Director'
    },
    slug: {
        type: String,
    }
});

module.exports = mongoose.model('Movie', movieSchema);