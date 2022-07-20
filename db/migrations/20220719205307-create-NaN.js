'use strict';

const {EMPLOYEES_TABLE, EmployeesSchema} = require("../models/employees.model");
const {EMPLOYEE_PROJECT_TABLE, EmployeeProjectSchema} = require("../models/employeeProject.model");
const {PROJECT_TABLE, ProjectSchema} = require("../models/projects.model");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(EMPLOYEES_TABLE,EmployeesSchema)
    await queryInterface.createTable(PROJECT_TABLE,ProjectSchema)
    await queryInterface.createTable(EMPLOYEE_PROJECT_TABLE,EmployeeProjectSchema)
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(EMPLOYEES_TABLE)
    await queryInterface.dropTable(PROJECT_TABLE)
    await queryInterface.dropTable(EMPLOYEE_PROJECT_TABLE)
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
