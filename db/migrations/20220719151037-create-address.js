'use strict';
const {ADDRESS_TABLE, AddressSchema} = require('../models/adreess.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ADDRESS_TABLE, AddressSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ADDRESS_TABLE)
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
