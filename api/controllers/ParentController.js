/**
 * ParentController
 *
 * @description :: Server-side logic for managing parents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req,res) {
  /*
    var parent = {
      name: req.param('name'),
      lastname: req.param('lastname'),
      email: req.param('email'),
      password: req.param('password')
    };

    Parent.create(parent, function userCreated(err, user) {
      if (err) {
        console.log(err);
        return res.redirect('/parent/grades');
      }
    });*/

    res.view();
  },
  grades: function(req,res) {
      res.view();
  },
  reports: function(req,res) {
      res.view();
  }
};

