/**
* Professor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  //Database connection
  connection: "someMysqlServer",
  //Table name
  tableName: "professor",
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
    email: {
      type: "string",
      unique: true
    },
    password: {
      type: "string"
    }
  }
};

