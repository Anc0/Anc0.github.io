/**
 * ParentController
 *
 * @description :: Server-side logic for managing parents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req,res) {
    var parent = {
      name: "Micka",
      lastname: "Novakovicecicieicei",
      email: "aaa@bbb.ccc",
      password: "rozica"
    };
    var Parent = waterline.collections.parent;
    model.createParent(parent);
    res.view();
  },
  grades: function(req,res) {
      res.view();
  },
  reports: function(req,res) {
      res.view();
  }
};

