const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const debug = require('debug')('sequelize-tuto:apiUser');
const { models } = require('../config/sequelize');
const ErrorResponse = require('../utils/ErrorResponse')

exports.showUsers = async (req, res) => {
  const users = await models.User.findAll({
    include: ['address', 'permits'], // model relations with hasOne and belongTo
    attributes: ['id', 'email','role']
  });
  return res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
};

exports.createUser = async (req, res,next) => {
  try {
    const newUser = {
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10)
    }
    const user = await models.User.create(newUser);
    debug(user)
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    //console.log(error);
    return next(new ErrorResponse(error.message,500))
  }
};

exports.searchOneUser = async (req,res) => {
  try {
    const user = await models.User.findByPk(req.params.id,{
      include: [{
        association: 'address', // add sentence where if you get filter
      }] // I can add a where sentence for find a specific field
    });
    const permitsByUser = await user.getPermits()

    return res.status(200).json({
      success: true,
      permits: permitsByUser,
      data: user
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

exports.login = async (req,res,next) => {
  try {
    const user = await models.User.findOne({
      where: { email: req.body.email }
    })

    if(!user) {
      return res.status(404).json({
        success: false,
        message: `this email ${req.body.email} not found`
      })
    }

    if(!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(400).json({
        success: false,
        message: 'password has wrong!!'
      })
    }

    let token = jwt.sign({
      user
    }, process.env.JWT_SEED, {expiresIn: process.env.JWT_EXPIRE});


    return res.status(200).json({
      success: true,
      token,
    })

  } catch (e) {
    next(new ErrorResponse(e.message,500))
  }
}
