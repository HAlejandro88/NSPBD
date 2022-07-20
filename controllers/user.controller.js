const { models } = require('../config/sequelize');

if(process.env.NODE_ENV === 'development') {
  const debug = require('debug')('sequelize-tuto:apiUser');
}


exports.showUsers = async (req, res) => {
  const users = await models.User.findAll({
    include: ['address', 'permits'] // model relations with hasOne and belongTo
  });
  return res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
};

exports.createUser = async (req, res) => {
  try {
    const user = await models.User.create(req.body);
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
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
