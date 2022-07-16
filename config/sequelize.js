const { Sequelize } = require('sequelize')
const {development} = require('../db/config')



const setupModel = require('../db/models/index')

const sequelize =  new Sequelize(
    development.database,
    development.username,
    development.password,
    {
        host: development.host,
        dialect: development.dialect,
        define: {
            // "createdAt": "createdat",
            // "updatedAt": "updatedat",
            timestamps: true
        }
    })

// Initialize models with conection
setupModel(sequelize)


module.exports = sequelize