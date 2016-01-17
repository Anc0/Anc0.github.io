/**
 * Grade.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  //Database connection
  connection: "someMysqlServer",
  //Table name
  tableName: "grade",
  //Model
  attributes: {
    id: {
      type: "integer",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    subject: {
      type: "string"
    },
    value: {
      type: "integer"
    },
    professor:{
      type: "string"
    },
    stud: {
      model: "student"
    }
  }
};



