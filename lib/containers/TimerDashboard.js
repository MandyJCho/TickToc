'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _EditableTimerList = require('./EditableTimerList');

var _EditableTimerList2 = _interopRequireDefault(_EditableTimerList);

var _ToggleableTimerForm = require('../components/ToggleableTimerForm');

var _ToggleableTimerForm2 = _interopRequireDefault(_ToggleableTimerForm);

var _client = require('../js/client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TimerDashboard extends _react2.default.Component {
  constructor(props) {
    console.log(_client2.default.getTimers());

    super(props);
    this.state = {
      timers: [{
        title: 'Practice React',
        elapsedTime: 1454200,
        startTime: Date.now(),
        uuid: _uuid2.default.v4()
      }, {
        title: 'Make Dinner',
        elapsedTime: 19495,
        startTime: null,
        uuid: _uuid2.default.v4()
      }]
    };

    // CRUD
    this.handleCreateTimer = this.handleCreateTimer.bind(this);
    this.handleUpdateTimer = this.handleUpdateTimer.bind(this);
    this.handleDeleteTimer = this.handleDeleteTimer.bind(this);
  }

  /**
   * creates a new timer
   * @param newState
   */
  handleCreateTimer(newTimer) {
    const updatedTimers = this.state.timers.concat([{
      title: newTimer.title,
      elapsedTime: 0,
      startTime: Date.now(),
      uuid: _uuid2.default.v4()
    }]);

    this.setState({
      timers: updatedTimers
    });
  }

  /**
   * generic timer updater that takes a desired attribute to alter
   * @param updateValue
   * @returns {Array}
   */
  handleUpdateTimer(updateValue, uuid) {
    // update timers array in state with updateValue
    const updatedTimers = this.state.timers.map(timer => timer.uuid === uuid ? Object.assign({}, timer, updateValue) : timer);

    this.setState({ timers: updatedTimers });
  }

  /**
   * deletes a timer
   * @param uuid
   */
  handleDeleteTimer(uuid) {
    const updatedTimers = this.state.timers.filter(timer => timer.uuid !== uuid);

    this.setState({
      timers: updatedTimers
    });
  }

  /**
   * Render components
   * @returns {XML}
   */
  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_EditableTimerList2.default, {
        timers: this.state.timers,
        onSubmitForm: this.handleUpdateTimer,
        onDeleteTimer: this.handleDeleteTimer,
        onSetStartTime: this.handleUpdateTimer
      }),
      _react2.default.createElement(_ToggleableTimerForm2.default, {
        onCreateTimer: this.handleCreateTimer
      })
    );
  }
}
exports.default = TimerDashboard; /*eslint-disable */