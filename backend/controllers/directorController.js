const Director = require('../models/director');


//Read all directors
exports.getDirectors = async (req, res) => {
    try{
        const directors = await Director.find();
        res.json(directors);
    } catch (err) {
        return res.status(500).json({ message: err.message });
     }
};

//Create a director
exports.createDirector = async (req, res) => {
    const { name, oscars } = req.body;
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    try{
        const director = new Director({ name, oscars, slug });
        const newDirector = await director.save();
        res.status(201).json(newDirector);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

//Read one director
exports.getDirectorBySlug = async (req, res) => {
    const slug = req.params.slug;
    try{
        const director = await Director.findOne({ slug: slug });
        if (director == null) {
            return res.status(404).json({ message: 'Director not found' });
        }
        res.json(director);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};


//Update a director
exports.updateDirector = async (req, res) => {
    const slug = req.params.slug;
    try{
        const director = await Director.findOne({ slug: slug });
        if (director == null) {
            return res.status(404).json({ message: 'Director not found' });
        }
        const {name, oscars, bio} = req.body;
        if (name != null) {
            director.name = name;
        }
        if (bio != null) {
            director.bio = bio;
        }
        if (oscars != null) {
            director.oscars = oscars;
        }
        const updatedDirector = await director.save();
        res.json(updatedDirector);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

//Delete a director
exports.deleteDirector = async (req, res) => {
    const slug = req.params.slug;
    try{
        const director = await Director.findOne({ slug: slug });
        if (director == null) {
            return res.status(404).json({ message: 'Director not found' });
        }
        await director.deleteOne();
        res.json({ message: 'Director deleted' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};