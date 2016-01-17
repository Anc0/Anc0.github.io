/**
 * ProfessorController
 *
 * @description :: Server-side logic for managing professors
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
  },
  submitGrade: function(req,res) {
    var name =      req.param("name");
    var lastname =  req.param("lastname");
    var subject =   req.param("subject");
    var value =     req.param("value");
    var professor = req.param("professor");
    console.log(typeof name);
    console.log(name);
    if(name == "" || lastname == "" || professor == "" || subject == "" || value == "") {
      console.log("tukiiiiiiiiii");
      var report = {message: "Vnesite podatke"};
      res.view(report);
    }
    else {
      Student.find({where: {name: name, lastname: lastname}, limit: 1})
        .exec(function findCB(err, found){
          if(typeof found == "object" && found.length > 0) {
            Grade.create({subject: subject, value: value, professor: professor, stud: found[0].id}).exec(function createCB(err, created){
              var report = {message: "Ocena uspešno vnesena."};
              res.view(report);
            });
          }
          else {
            var report = {message: "Dijak ne obstaja."};
            res.view(report);
          }
        });
    }
  }
};