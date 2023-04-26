//Routes for movies using RESTful API
const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

//GET all movies
router.get('/', movieController.getMovies);

//POST a new movie and upload a photo
router.post('/add', movieController.uploadPhoto, movieController.createMovie);

//GET a movie by slug
router.get('/:slug', movieController.getMovieBySlug);

//Update an existing movie by slug
router.put('/:slug/edit', movieController.updateMovie);

//Delete an existing movie by slug
router.delete('/:slug', movieController.deleteMovie);

module.exports = router;