import Sequelize from 'sequelize';

import {username, password, database} from '../../config';

const sequelize = new Sequelize(database, username, password);

const TIMER = {
  UUID: 'uuid',
  TITLE: 'title',
  ELAPSED: 'elapsed_timer',
  START: 'start_time',
};
