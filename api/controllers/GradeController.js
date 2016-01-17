/**
 * GradeController
 *
 * @description :: Server-side logic for managing grades
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	viewGrade: function(req,res) {
    var name = req.param("name");
    var lastname = req.param("lastname");
    console.log("name");
    var output = document.getElementById("grades-list");
    res.redirect("http://localhost:1337/administrator/grades");
  }
};

