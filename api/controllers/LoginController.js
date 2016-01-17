/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req,res) {
    var mail    = req.param("email");
    var pass = req.param("password");
    var type     = req.param("type");
    switch(type){
      case "admin":
        Administrator.find({where: {email: mail, password: pass}, limit: 1}).exec(function findCB(err, found){
          if(found.length == 0) {
            res.redirect("http://localhost:1337");
          }
          else {
            res.redirect("http://localhost:1337/administrator/home");
          }
        });
        break;
      case "prof":
        Professor.find({where: {email: mail, password: pass}, limit: 1}).exec(function findCB(err, found){
          if(found.length == 0) {
            res.redirect("http://localhost:1337");
          }
          else {
            res.redirect("http://localhost:1337/administrator/home");
          }
        });
        break;
      case "parent":
        Parent.find({where: {email: mail, password: pass}, limit: 1}).exec(function findCB(err, found){
          if(found.length == 0) {
            res.redirect("http://localhost:1337");
          }
          else {
            res.redirect("http://localhost:1337/administrator/home");
          }
        });
        break;
      default:
        res.redirect("http://localhost:1337");
    }

  }
};

