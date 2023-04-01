// Require the necessary models
let Question = require('../models/questionSchema');
let Option = require('../models/optionsSchema');

// Define a function to delete an option
module.exports.deleteoption = async (req, res) => {
  try {
    // Find the option with the given ID
    let option = await Option.findById(req.params.id);
    // If the option is not found, return a 404 error
    if (option == null) {
      return res.status(404).json({
        message: 'Error : Option not found',
      });
    }
    // If the option has votes, return a 405 error
    if (option.vote > 0) {
      return res.status(405).json({
        message: 'Option cannot be deleted since it has some votes',
      });
    }
    // Get the ID of the question associated with the option
    let questionId = option.question;
    // Remove the option from the database
    await option.remove();
    // Remove the option ID from the options array of the associated question
    let question = await Question.findByIdAndUpdate(questionId, {
      $pull: { options: req.params.id },
    });
    // Return a success message
    return res.status(200).json({
      message: 'Option removed from question',
    });
  } catch (error) {
    // If there is an error, return a 422 error
    return res.status(422).json({
      message: 'Error while deleting option',
    });
  }
};

// Define a function to increase the vote count for an option
module.exports.addVote = async (req, res) => {
  try {
    // Find the option with the given ID
    let option = await Option.findById(req.params.id);
    // If the option exists, increase its vote count by 1 and save it to the database
    if (option) {
      option.vote += 1;
      await option.save();
    }
    // Return a success message with the updated vote count
    return res.status(200).json({
      message: 'votes updated',
      voteCount: option.vote,
    });
  } catch (error) {
    // If there is an error, return a 500 error
    return res.status(500).json({
      message: 'Server Error or Option not found',
    });
  }
};
