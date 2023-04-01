const express = require('express');
const router = express.Router();

const questionsController = require('../controllers/questionsController');
//create questions action route
router.post('/create', questionsController.create);
//get question action route
router.get('/:id', questionsController.getQuestion);
// delete question action route
router.delete('/:id/delete', questionsController.deleteQuestion);

//create option route
router.post('/:id/options/create', questionsController.questionOptionsCreate);
module.exports = router;
