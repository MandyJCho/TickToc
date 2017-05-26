'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTimers() {
  const uri = `http://localhost:${_config2.default.port}`;
  _axios2.default.get(uri).then(response => console.log(response.data));
}

exports.default = {
  getTimers
};