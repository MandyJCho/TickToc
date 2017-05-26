'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Timer = require('../components/Timer');

var _Timer2 = _interopRequireDefault(_Timer);

var _TimerForm = require('../components/TimerForm');

var _TimerForm2 = _interopRequireDefault(_TimerForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const proptypes = {
  title: _propTypes2.default.string,
  elapsedTime: _propTypes2.default.number,
  startTime: _propTypes2.default.number,
  uuid: _propTypes2.default.string,
  onSubmitForm: _propTypes2.default.func.isRequired,
  onDeleteTimer: _propTypes2.default.func.isRequired,
  onSetStartTime: _propTypes2.default.func.isRequired
};

class EditableTimer extends _react2.default.Component {
  constructor(props) {
    super(props);

    this.state = {
      enableEditing: false
    };

    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleDeleteTimer = this.handleDeleteTimer.bind(this);
    this.handleSetStartTime = this.handleSetStartTime.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleRequestEdit = this.handleRequestEdit.bind(this);
  }

  handleCloseForm() {
    this.setState({
      enableEditing: false
    });
  }

  handleDeleteTimer(uuid) {
    this.props.onDeleteTimer(uuid);
  }

  handleRequestEdit() {
    this.setState({
      enableEditing: true
    });
  }

  handleSetStartTime(newStartTime, uuid) {
    this.props.onSetStartTime(newStartTime, uuid);
  }

  handleSubmitForm(newTitle, uuid) {
    this.props.onSubmitForm(newTitle, uuid);
    this.handleCloseForm();
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'center',
        null,
        this.state.enableEditing ? _react2.default.createElement(_TimerForm2.default, {
          title: this.props.title,
          submitText: 'Update',
          uuid: this.props.uuid,
          onCloseForm: this.handleCloseForm,
          onSubmitForm: this.handleSubmitForm
        }) : _react2.default.createElement(_Timer2.default, {
          title: this.props.title,
          elapsedTime: this.props.elapsedTime,
          startTime: this.props.startTime,
          uuid: this.props.uuid,
          onRequestEdit: this.handleRequestEdit,
          onDeleteTimer: this.handleDeleteTimer,
          onSetStartTime: this.handleSetStartTime
        })
      )
    );
  }
}

EditableTimer.propTypes = proptypes;

exports.default = EditableTimer;