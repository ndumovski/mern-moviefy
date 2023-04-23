const Movie = require('../models/movie');
const Director = require('../models/director');

//Read all movies
exports.getMovies = async (req, res) => {
    try{
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        return res.status(500).json({ message: err.message });
     }
};

//Create a movie
exports.createMovie = async (req, res) => {
    const { title, description, releaseYear, rating, director } = req.body;
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    try{
        const movie = new Movie({ title, description, releaseYear, rating, director, slug });
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
        console.log(newMovie);
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

//Read one movie
exports.getMovieBySlug = async (req, res) => {
    const slug = req.params.slug;
    try{
        const movie = await Movie.findOne({ slug: slug });
        if(movie == null) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

//Update a movie
exports.updateMovie = async (req, res) => {
    const slug = req.params.slug;
    try{
        const movie = await Movie.findOne({ slug: slug });
        if(movie == null) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        const { title, description, releaseYear, rating, director } = req.body;
        if(title != null) {
            movie.title = title;
        }
        if(description != null) {
            movie.description = description;
        }
        if(releaseYear != null) {
            movie.releaseYear = releaseYear;
        }
        if(rating != null) {
            movie.rating = rating;
        }
        if(director != null) {
            movie.director = director;
        }
        const updatedMovie = await movie.save();
        res.json(updatedMovie);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

//Delete a movie
exports.deleteMovie = async (req, res) => {
    const slug = req.params.slug;
    try{
        const movie = await Movie.findOne({ slug: slug });
        if(movie == null) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        await movie.deleteOne();
        res.json({ message: 'Movie deleted' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

