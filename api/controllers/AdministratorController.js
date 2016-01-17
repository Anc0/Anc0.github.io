/**
 * AdministratorController
 *
 * @description :: Server-side logic for managing administrators
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  home: function(req,res) {
    res.view();
  },
  grades: function(req,res) {
    var name = req.param("name");
    var lastname = req.param("lastname");
    var grades;
    Student.find({where: {name: name, lastname: lastname}, limit: 1}).populate('grades')
      .exec(function findCB(err, found){
      if(found.length > 0) {
        console.log(found[0].grades);
        //console.log(typeof found);
        //var student = JSON.parse(found);
        //console.log("test");
        //console.log(student);
        res.view(found[0].grades);
      }
    });
  },
  submitGrade: function(req,res) {
    res.view();
  }
};