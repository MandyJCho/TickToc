import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  submitText: PropTypes.string.isRequired,
  uuid: PropTypes.string,
  onCloseForm: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

class TimerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title || '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmitForm() {
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
          <button onClick={this.handleSubmitForm}>{this.props.submitText}</button>
          <button onClick={this.props.onCloseForm}>Cancel</button>
        </div>
      </div>
    );
  }
}

TimerForm.propTypes = propTypes;
TimerForm.displayName = 'TimerForm';

export default TimerForm;
