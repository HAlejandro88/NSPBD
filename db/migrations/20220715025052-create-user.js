'use strict';

const { USER_TABLE, UserSchema } = require('../models/user.model');

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable(USER_TABLE);
  },
};
