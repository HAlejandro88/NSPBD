'use strict';
const {userSchema} = require('../models/user.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users',userSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
