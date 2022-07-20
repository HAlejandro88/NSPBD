'use strict';
const {PERMITS_TABLE, PermitsSchema} =  require('../models/permits.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PERMITS_TABLE, PermitsSchema)

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PERMITS_TABLE)
  }
};
