const {User,userSchema} = require('./user.model.js')

function setupModel (conection) {
    User.init(userSchema,User.config(conection))

    //User.associations(conection.models)
}

module.exports = setupModel