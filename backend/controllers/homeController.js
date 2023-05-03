//This is the controller for the home page
const Movie = require('../models/movie');

//Read Home page
exports.getHome = async (req, res) => {
    try{
        const movies = await Movie.find().sort({ createdAt: 'desc' }).limit(3).exec();
        res.json(movies);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}