/**
 * ParentController
 *
 * @description :: Server-side logic for managing parents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	home: function(req,res) {
     res.view();
  },
  grades: function(req,res) {
    var name = req.param("name");
    var lastname = req.param("lastname");
    Student.find({where: {name: name, lastname: lastname}, limit: 1}).populate('grades')
      .exec(function findCB(err, found){
        console.log(typeof found);
        if(typeof found == "object") {
          console.log(found[0]);
          res.view(found[0]);
        }
        else {
          var nula = {grades: {}};
          res.view(nula);
        }
      });
  }
};

