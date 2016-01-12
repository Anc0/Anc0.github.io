/**
* Student.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  //Database connection
  connection: "someMysqlServer",
  //Table name
  tableName: "student",
  //Model
  attributes: {
    id: {
      type: "integer",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    name: {
      type: "string"
    },
    lastname: {
      type: "string"
    },
    parents: {
      collection: "parent",
      via: "student"
    },
    professors: {
      collection: "professor",
      via: "students"
    },
    grades: {
      collection: "grade",
      via: "student"
    }
  }
};
