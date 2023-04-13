const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const Director = require('../models/director');

// GET all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        console.log(err);
    }
});

//Get one movie
router.get('/:id', getMovie, (req, res) => {
    res.json(res.movie);
});

//Create new movie
router.post('/', async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        releaseYear: req.body.releaseYear,
        rating: req.body.rating,
        director: req.body.director
    });

    try{
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
        // console.log(newMovie);
    } catch (err) {
        console.log(err);
    }
});

//Update a movie
router.put('/:id', getMovie, async (req, res) => {
    if (req.body.title != null) {
        res.movie.title = req.body.title;
    }
    if (req.body.description != null) {
        res.movie.description = req.body.description;
    }
    if (req.body.releaseYear != null) {
        res.movie.releaseYear = req.body.releaseYear;
    }
    if (req.body.rating != null) {
        res.movie.rating = req.body.rating;
    }
    if (req.body.director != null) {
        res.movie.director = req.body.director;
    }
    try {
        const updatedMovie = await res.movie.save();
        res.json(updatedMovie);
      } catch (err) {
        console.log(err);
      }
});

//Delete a movie
router.delete('/:id', getMovie, async (req, res) => {
    try {
        await res.movie.deleteOne();
        res.json({ message: 'Deleted Movie' });
    } catch (err) {
        console.log(err);
    }
});

//Middleware function to get movie by ID
async function getMovie(req, res, next) {
    let movie;
    try {
        movie= await Movie.findById(req.params.id);
        if (movie == null) {
            return res.status(404).json({ message: 'Cannot find movie' });
        }
    } catch (err) {
        console.log(err);
    }
    res.movie = movie;
    next();
}


module.exports = router;