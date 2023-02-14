require('dotenv').config({ path: `../.env.${process.env.NODE_ENV}` })
const { Sequelize } = require('sequelize');
const config = require('../db/config');

const setupModel = require('../db/models/index');

const sequelize = new Sequelize(
  config[process.env.NODE_ENV].database,
    config[process.env.NODE_ENV].username,
    config[process.env.NODE_ENV].password,
  {
    host: config[process.env.NODE_ENV].host,
    dialect: config[process.env.NODE_ENV].dialect,
    define: {
      // "createdAt": "createdat",
      // "updatedAt": "updatedat",
      timestamps: true,
    },
  }
);

// Initialize models with connection
setupModel(sequelize);

module.exports = sequelize;
