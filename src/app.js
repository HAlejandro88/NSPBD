require('colors')
const express = require('express');
const debug = require('debug')('sequelize-tuto:server');
const cors = require('cors');
const sequelize = require('./config/db')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/users',require('./routes/user.routes'))
app.use('/tasks',require('./routes/task.routes'))

app.listen(3000, (error) => {
      if (error) {
        debug(error);
      }
      debug('Server is running 🚀');
      // Conectar a la base de datos
      // Force true: hace un Drop Tables
      /*sequelize.sync({force: false})
          .then((result) => {
        console.log('Base de datos mysql conectada'.bold.cyan)
      }).catch((error) => debug('error en base de datos '+ error))*/
})
