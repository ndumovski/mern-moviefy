const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    releaseYear: {
        type: Date,
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
    },
    photo:{
        type: String
    }
});

module.exports = mongoose.model('Movie', movieSchema);