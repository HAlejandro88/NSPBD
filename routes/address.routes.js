const express = require('express');
const router = express.Router();
const AddressControllers = require('../controllers/address.controller')


router.route('/')
    .get(AddressControllers.getAllAddressForUsers)
    .post(AddressControllers.createAddress)


module.exports = router