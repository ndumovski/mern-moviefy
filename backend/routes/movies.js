const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// GET all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;