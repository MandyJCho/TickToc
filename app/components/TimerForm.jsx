import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  submitText: PropTypes.string.isRequired,
  uuid: PropTypes.string,
  onCloseForm: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequire,
};

class TimerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title || '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmitUpdate() {
    this.props.onSubmitForm({
      title: this.state.title,
      uuid: this.props.uuid,
    });
  }

  render() {
    return (
      <div className="timer" >
        <input className="form" value={this.state.title} onChange={this.handleTitleChange} />
        <div className="btn-container">
          <button onClick={this.handleSubmitUpdate}>{this.props.submitText}</button>
          <button onClick={this.props.onCloseForm}>Cancel</button>
        </div>
      </div>
    );
  }
}

TimerForm.propTypes = propTypes;

export default TimerForm;
