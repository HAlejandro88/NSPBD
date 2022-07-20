require('colors');
require('dotenv').config();
const express = require('express');
const debug = require('debug')('sequelize-tuto:server');
const cors = require('cors');
// const sequelize = require('./config/sequelize');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/v1/users', require('./routes/user.routes'));
app.use('/api/v1/address', require('./routes/address.routes'));
app.use('/api/v1/permits', require('./routes/permits.route'));
app.use('/api/v1/employees', require('./routes/employee.routes'));
app.use('/api/v1/projects', require('./routes/project.routes'));

app.listen(3000, (error) => {
  if (error) {
    debug(error.message);
    process.exit(1);
  }
  debug('Server is running 🚀');
  // Connect database
  // Force true: If you put the properties force in true, sequelize will drop all tables and then will be build
  /*sequelize.sync({force: false})
          .then((result) => {
        console.log('Base de datos mysql conectada'.bold.cyan)
      }).catch((error) => debug('error en base de datos '+ error))*/
});
