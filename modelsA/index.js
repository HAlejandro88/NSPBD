const {User,userSchema} = require('../db/models/user.model.js')

function setupModel (conection) {
    User.init(userSchema,User.config(conection))

    //User.associations(conection.modelsA)
}

module.exports = setupModel