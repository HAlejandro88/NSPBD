const express = require('express')
const router = express.Router()
const UserControllers = require('../controllers/user.controller')

router.route('/')
        .get(UserControllers.showUsers)
        .post(UserControllers.createUser)


module.exports = router