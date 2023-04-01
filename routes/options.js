const express = require('express');
const router = express.Router();
const optionsController = require('../controllers/optionsController');

//delete option route
router.delete('/:id/delete', optionsController.deleteoption);

//add vote route
router.put('/:id/add_vote', optionsController.addVote);

module.exports = router;
