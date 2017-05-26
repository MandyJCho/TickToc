'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EditableTimer = require('./EditableTimer');

var _EditableTimer2 = _interopRequireDefault(_EditableTimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const propTypes = {
  timers: _propTypes2.default.array,
  onSubmitForm: _propTypes2.default.func.isRequired,
  onDeleteTimer: _propTypes2.default.func.isRequired,
  onSetStartTime: _propTypes2.default.func.isRequired
};

function EditableTimerList(props) {
  /**
   * percolates new timer name and uuid to parent
   * @param nextState
   */
  function handleSubmitForm(uuid, newTitle) {
    props.onSubmitForm(uuid, newTitle);
  }

  /**
   * percolates uuid of timer to delete
   * @param uuid
   */
  function handleDeleteTimer(uuid) {
    props.onDeleteTimer(uuid);
  }

  /**
   * percolates a new startTime to dashboard
   * @param uuid
   * @param newStartTime
   */
  function handleSetStartTime(newStartTime, uuid) {
    props.onSetStartTime(newStartTime, uuid);
  }

  // generate new timers
  const timers = props.timers.map(timer => _react2.default.createElement(_EditableTimer2.default, {
    title: timer.title,
    elapsedTime: timer.elapsedTime,
    startTime: timer.startTime,
    onSubmitForm: handleSubmitForm.bind(this),
    onDeleteTimer: handleDeleteTimer.bind(this),
    onSetStartTime: handleSetStartTime.bind(this),
    uuid: timer.uuid,
    key: timer.uuid
  }));

  return _react2.default.createElement(
    'div',
    null,
    timers
  );
}

EditableTimerList.propTypes = propTypes;

exports.default = EditableTimerList;