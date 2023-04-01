// Require the necessary models
const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

//home routing
router.get('/', homeController.home);

//questions routing
router.use('/questions', require('./questions'));

//options routing
router.use('/options', require('./options'));

//export router
module.exports = router;
