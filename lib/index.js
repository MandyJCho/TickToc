'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./styles/base');

var _TimerDashboard = require('./containers/TimerDashboard');

var _TimerDashboard2 = _interopRequireDefault(_TimerDashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable*/
_reactDom2.default.render(_react2.default.createElement(_TimerDashboard2.default, null), document.getElementById('app'));