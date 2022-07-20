const express = require('express');
const router = express.Router();
const PermitsControllers = require('../controllers/permits.controller')

router.route('/')
    .get(PermitsControllers.getAllPermits)
    .post(PermitsControllers.createPermitsForUser)


module.exports = router