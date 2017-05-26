import axios from 'axios';

import config from './config';

function getTimers() {
  const uri = `http://localhost:${config.port}`;
  axios.get(uri).then(response => console.log(response.data));
}

export default {
  getTimers,
};
