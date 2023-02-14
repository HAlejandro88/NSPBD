const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/user.controller');
const {authorization} = require('../middlewares/Authorization')

router
  .route('/')
  .get(UserControllers.showUsers)
  .post(UserControllers.createUser);

router.route('/:id')
    .get(authorization,UserControllers.searchOneUser)

router.route('/login')
    .post(UserControllers.login)

module.exports = router;
