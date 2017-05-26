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
  title: _propTypes2.default.string,
  submitText: _propTypes2.default.string.isRequired,
  uuid: _propTypes2.default.string,
  onCloseForm: _propTypes2.default.func.isRequired,
  onSubmitForm: _propTypes2.default.func
};

class TimerForm extends _react2.default.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title || ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmitForm() {
    this.props.onSubmitForm({ title: this.state.title }, this.props.uuid);
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'timer' },
      _react2.default.createElement('input', { className: 'form', value: this.state.title, onChange: this.handleTitleChange }),
      _react2.default.createElement(
        'div',
        { className: 'btn-container' },
        _react2.default.createElement(
          'button',
          { onClick: this.handleSubmitForm },
          this.props.submitText
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.props.onCloseForm },
          'Cancel'
        )
      )
    );
  }
}

TimerForm.propTypes = propTypes;
TimerForm.displayName = 'TimerForm';

exports.default = TimerForm;