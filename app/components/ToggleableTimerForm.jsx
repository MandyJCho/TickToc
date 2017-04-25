import React from 'react';
import PropTypes from 'prop-types';

import TimerForm from './TimerForm';

const propTypes = {
  enableEditing: PropTypes.bool,
  onSubmitForm: PropTypes.func.isRequired,
};

class ToggleableTimerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enableEditing: false,
    };
    this.handleEditPermission = this.handleEditPermission.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleEditPermission() {
    this.setState({
      enableEditing: !this.state.enableEditing,
    });
  }

  handleSubmitForm(newState) {
    this.props.onSubmitForm(newState);
    this.handleEditPermission();
  }

  render() {
    return (
      <div>
        <center>
          {this.state.enableEditing ?
            <TimerForm
              submitText="Create"
              onCloseForm={this.handleEditPermission}
              onSubmitForm={this.handleSubmitForm}
            /> :
            <button onClick={this.handleEditPermission}>+</button>}
        </center>
      </div>
    );
  }
}

ToggleableTimerForm.propTypes = propTypes;

export default ToggleableTimerForm;
