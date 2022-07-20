const { User, UserSchema } = require('./user.model');
const { DataTypes, Sequelize } = require('sequelize');
const {Address, AddressSchema} = require("./adreess.model");
const {Permits, PermitsSchema} = require("./permits.model");
const {Employee, EmployeesSchema} = require("./employees.model");
const {Project, ProjectSchema} = require("./projects.model");
const {EmployeeProject, EmployeeProjectSchema} = require("./employeeProject.model");

function setupModel(connection) {
  User.init(UserSchema, User.config(connection));
  Address.init(AddressSchema, Address.config(connection))
  Permits.init(PermitsSchema, Permits.config(connection))
  Employee.init(EmployeesSchema, Employee.config(connection))
  Project.init(ProjectSchema, Project.config(connection))
  EmployeeProject.init(EmployeeProjectSchema, EmployeeProject.config(connection))

  //User.associations(conection.modelsA)
  User.assocciate(connection.models)
  Address.associate(connection.models)
  Permits.assocciate(connection.models)
  Employee.assocciate(connection.models)
  // Project.associate(connection.models)
  // EmployeeProject.associate(connection.models)
}

module.exports = setupModel;
