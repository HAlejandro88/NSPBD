const {User,UserSchema} = require('./user.model')
const {DataTypes, Sequelize} = require("sequelize");

function setupModel (conection) {
  User.init(UserSchema, User.config(conection))

  //User.associations(conection.modelsA)
}

module.exports = setupModel