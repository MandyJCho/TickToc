import Sequelize, { DataTypes } from 'sequelize';

import {username, password, database} from '../../config';

const PORT = 3000;

// connect to db
const sequelize = new Sequelize(database, username, password, {
  host: PORT,
  dialect: 'postrgres',
});

// test connection
sequelize.authenticate()
  .then(() => console.log(`Success. Listening on port ${PORT}`))
  .catch(err => console.log(`Unable to connect. ERROR: ${err}`));

// define timer schema
const timer = sequelize.define('timer', {
  uuid: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  TITLE: {
    type: DataTypes.STRING,
  },
  ELAPSED: {
    type: DataTypes.INTEGER,
  },
  START: {
    type: DataTypes.INTEGER,
  },
});

/*
TODO:
- connect the file to the app
- populate db
- reconcile DataTypes from sequelize
- provide more details in config like cascades and think about adding a user type object to the db
 */