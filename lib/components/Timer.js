'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const propTypes = {
  title: _propTypes2.default.string.isRequired,
  elapsedTime: _propTypes2.default.number,
  startTime: _propTypes2.default.number,
  uuid: _propTypes2.default.string,
  onRequestEdit: _propTypes2.default.func.isRequired,
  onDeleteTimer: _propTypes2.default.func.isRequired,
  onSetStartTime: _propTypes2.default.func.isRequired
};

class Timer extends _react2.default.Component {
  constructor(props) {
    super(props);

    this.state = {
      elapsedTime: this.props.elapsedTime
    };

    this.handleDeleteForm = this.handleDeleteForm.bind(this);
    this.handleSetStartTime = this.handleSetStartTime.bind(this);
    this.incrementTime = this.incrementTime.bind(this);
  }

  /**
   * creates an interval for timers with start times
   */
  componentDidMount() {
    if (this.props.startTime) {
      this.interval = setInterval(this.incrementTime, 1000);
    }
  }

  /**
   * clear all intervals before unmounting
   */
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  /**
   * increments the time on a timer by 1 second
   */
  incrementTime() {
    this.setState({
      elapsedTime: this.state.elapsedTime + 1000
    });
  }

  /**
   * percolates up a delete request to EditableTimer
   */
  handleDeleteForm() {
    this.props.onDeleteTimer(this.props.uuid);
  }

  /**
   * percolates a state change of the start and elapsed times
   */
  handleSetStartTime() {
    let newStartTime;

    if (this.props.startTime) {
      // pause the timer and clear the interval
      newStartTime = { elapsedTime: this.state.elapsedTime, startTime: null };
      clearInterval(this.interval);
    } else {
      // start the timer and create an interval
      newStartTime = { elapsedTime: this.state.elapsedTime, startTime: Date.now() };
      this.interval = setInterval(this.incrementTime, 1000);
    }

    // pass params onto parent
    this.props.onSetStartTime(newStartTime, this.props.uuid);
  }

  /**
   * formats the elapsed time to HH:MM:SS
   * @returns {string}
   */
  formatDisplayTime() {
    return window.helper.convertMsToHMS(this.state.elapsedTime);
  }

  /**
   * Renders timer component
   * @returns {XML}
   */
  render() {
    const displayTime = this.formatDisplayTime();
    const controlTimerText = this.props.startTime ? 'pause' : 'start';
    return _react2.default.createElement(
      'div',
      { className: 'timer' },
      _react2.default.createElement(
        'div',
        null,
        this.props.title
      ),
      _react2.default.createElement(
        'div',
        null,
        displayTime
      ),
      _react2.default.createElement(
        'div',
        { className: 'btn-container' },
        _react2.default.createElement(
          'button',
          { onClick: this.handleSetStartTime },
          controlTimerText
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.props.onRequestEdit },
          'edit'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.handleDeleteForm },
          'delete'
        )
      )
    );
  }
}

Timer.propTypes = propTypes;

exports.default = Timer;