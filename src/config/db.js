const { Sequelize } = require('sequelize')
const { database } = require('./config')

const setupModel = require('../models/index')


const sequelize =  new Sequelize(
    database.database,
    database.username,
    database.password,
    {
        host: database.host,
        dialect: database.dialect
    })

setupModel(sequelize)


module.exports = sequelize