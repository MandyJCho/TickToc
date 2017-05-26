'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TimerForm = require('./TimerForm');

var _TimerForm2 = _interopRequireDefault(_TimerForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const propTypes = {
  onCreateTimer: _propTypes2.default.func.isRequired
};

class ToggleableTimerForm extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      enableEditing: false
    };

    // toggle edit permissions
    this.handleEditPermission = this.handleEditPermission.bind(this);

    // percolate changes to parent
    this.handleCreateTimer = this.handleCreateTimer.bind(this);
  }

  handleEditPermission() {
    this.setState({
      enableEditing: !this.state.enableEditing
    });
  }

  handleCreateTimer(newTimer) {
    this.props.onCreateTimer(newTimer);
    this.handleEditPermission();
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'center',
        null,
        this.state.enableEditing ? _react2.default.createElement(_TimerForm2.default, {
          submitText: 'Create',
          onCloseForm: this.handleEditPermission,
          onSubmitForm: this.handleCreateTimer
        }) : _react2.default.createElement(
          'button',
          { onClick: this.handleEditPermission },
          '+'
        )
      )
    );
  }
}

ToggleableTimerForm.propTypes = propTypes;

exports.default = ToggleableTimerForm;