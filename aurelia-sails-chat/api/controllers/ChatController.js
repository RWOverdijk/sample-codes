/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


 module.exports = {

  index: function (req,res) {
    // Get the value of a parameter
    var param = req.param('message');

    // Send a JSON response
    res.json({
      success: true,
      message: param
    });
  }
};

