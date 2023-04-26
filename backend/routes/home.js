//Route for home page (GET)
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

//GET home page
router.get('/', homeController.getHome);

module.exports = router;
