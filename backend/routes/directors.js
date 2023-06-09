//Routes for directors using RESTful API
const express = require('express');
const router = express.Router();
const directorController = require('../controllers/directorController');

//GET all directors
router.get('/', directorController.getDirectors);

//POST a new director
router.post('/add', directorController.createDirector);

//GET a director by slug
router.get('/:slug', directorController.getDirectorBySlug);

//Update an existing director by slug
router.put('/:slug/edit', directorController.updateDirector);

//Delete an existing director by slug
router.delete('/:slug', directorController.deleteDirector);

module.exports = router;
