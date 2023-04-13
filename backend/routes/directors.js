const express = require('express');
const router = express.Router();
const Director = require('../models/director');
const Movie = require('../models/movie');

// GET all directors
router.get('/', async (req, res) => {
    try {
        const directors = await Director.find();
        res.json(directors);
    } catch (err) {
        console.log(err);
    }
});

//GET one director
router.get('/:id', getDirector, async (req, res) => {
    try{
        const movies = await Movie.find({director: res.director.id});
        res.json({
            director: 
            res.director, 
            movies: movies
        });
    } catch (err) {
        console.log(err);
    }
});

//POST (create) new director
router.post('/', async (req, res) => {
    const director = new Director({
        name: req.body.name,
        oscars: req.body.oscars
    }); 

    try {
        const newDirector = await director.save();
        res.status(201).json(newDirector);
        // console.log(newDirector);
    }
    catch (err) {
        console.log(err);
    }
});

//PUT (update) a director
router.put('/:id', getDirector, async (req, res) => {
    if (req.body.name != null) {
        res.director.name = req.body.name;
    }
    if (req.body.oscars != null) {
        res.director.oscars = req.body.oscars;
    }
});

//DELETE a director
router.delete('/:id', getDirector, async (req, res) => {
    try {
        const movies = await Movie.find({ director: res.director.id });
        if (movies.length > 0) {
          return res.status(400).json({
            message: 'Cannot delete director with associated movies',
          });
        }
        await res.director.deleteOne();
        res.json({ message: 'Director has been deleted' });
      } catch (err) {
        console.log(err);
      }
});

//Middleware function to get director by ID
async function getDirector(req, res, next) {
    let director;
    try {
        director = await Director.findById(req.params.id);
        if (director == null) {
            return res.status(404).json({ message: 'Cannot find director' });
        }
    } catch (err) {
        console.log(err);
    }
    res.director = director;
    next();
}

module.exports = router;
