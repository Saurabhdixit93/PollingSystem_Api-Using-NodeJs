// Require the necessary models
let Question = require('../models/questionSchema');
let Option = require('../models/optionsSchema');

// Define a function to create a new question
module.exports.create = async (req, res) => {
  try {
    // Check if the request body contains content for the question
    if (req.body.content == '') {
      return res.status(400).json({
        message: 'Empty question',
      });
    }
    // Create a new question in the database with the provided content and an empty options array
    let question = await Question.create({
      content: req.body.content,
      options: [],
    });

    // Return a success message along with the created question object
    return res.status(201).json({
      message: 'Question created Successfully',
      question: question,
    });
  } catch (error) {
    console.log(error);
    // If there is an error, return a 422 error along with the error object
    return res.status(422).json({
      message: 'Error while creating question',
      error: error,
    });
  }
};

// Define a function to get a question by its ID
module.exports.getQuestion = async (req, res) => {
  try {
    // Find the question with the given ID
    let question = await Question.findById(req.params.id);
    // If the question is not found, return a 404 error
    if (question == null) {
      return res.status(404).json({
        message: 'Question does not exist',
      });
    }
    // Populate the options array of the question object and return it along with a success message
    question = await question.populate('options');
    return res.status(200).json({
      message: 'Here is your question',
      question: question,
    });
  } catch (error) {
    console.log(error);
    // If there is an error, return a 500 error
    return res.status(500).json({
      message: 'Error while fetching question',
    });
  }
};



//delete question action
module.exports.deleteQuestion = async (req, res) => {
  try {
    //find question by id
    let question = await Question.findById(req.params.id);
    //populate question with options
    question = await question.populate('options');
    console.log(question);
    if (question == null) {
      // return error if question is already deleted
      return res.status(422).json({
        message: 'Question already deleted',
      });
    }
    // check if any of the options have votes
    for (let o of question.options) {
      if (o.vote > 0) {
        // return error if any of the options have votes
        return res.status(405).json({
          message: 'Question cannot be deleted since one of its options has votes',
        });
      }
    }
    // delete all options associated with the question
    let deleted = await Option.deleteMany({ question: question.id });
    // delete the question
    await question.remove();
    return res.status(200).json({
      message: 'Question deleted',
      deleted: deleted
    });
  } catch (error) {
    // return error if there is any problem deleting the question
    return res.status(422).json({
      message: 'Error while deleting question',
    });
  }
};


// create option
module.exports.questionOptionsCreate = async (req, res) => {
  try {
    // return error if the request body is empty
    if (req.body.content == '') {
      return res.status(422).json({
        message: 'Empty option',
      });
    }
    // find question by id
    let question = await Question.findById(req.params.id);
    // create a new option
    let option = await Option.create({
      content: req.body.content,
      question: question.id,
      vote: 0,
    });
    // create link to vote field
    let link_to_vote = `${req.protocol}://${req.headers.host}/options/${option.id}/add_vote`;
    // add link to option
    option.link_to_vote = link_to_vote;
    await option.save();
    // add option to the question's options array
    await question.options.push(option);
    await question.save();
    return res.status(200).json({
      option,
    });
  } catch (error) {
    // return error if there is any problem creating the option
    console.log(error);
    return res.status(422).json({
      message: 'Error while adding option',
      error: error,
    });
  }
};