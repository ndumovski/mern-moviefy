const Movie = require('../models/movie');
const multer = require('multer');
const path = require('path');

//Set storage engine
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../../frontend/public/uploads'));
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

//Check file type
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5, // 5 MB
      },
    onError: function (err, next) {
      console.log('Multer error:', err);
      next(err);
    }
  });

//Upload a poster
exports.uploadPhoto = upload.single('photo');

//Read all movies
exports.getMovies = async (req, res) => {
    try{
        const movies = await Movie.find().populate('director').exec();
        res.json(movies);
    } catch (err) {
        return res.status(500).json({ message: err.message });
     }
};

//Create a movie
exports.createMovie =  async (req, res) => {
    const { title, description, releaseYear, rating, director } = req.body;
    const slug = title.toLowerCase().split(' ').join('-');
    const photo = req.file.filename;
    console.log(photo);
    const movie = new Movie({title, description, releaseYear, rating, director, slug, photo});
    try{
        const newMovie = await movie.save();
        console.log(newMovie);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};
//Read one movie
exports.getMovieBySlug = async (req, res) => {
    const slug = req.params.slug;
    try{
        const movie = await Movie.findOne({ slug: slug }).populate('director').exec();
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
        if(req.file != null) {
            movie.photo = req.file.filename;
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



