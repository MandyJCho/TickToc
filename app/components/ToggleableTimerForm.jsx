import React from 'react';
import PropTypes from 'prop-types';

import TimerForm from './TimerForm';

const propTypes = {
  onCreateTimer: PropTypes.func.isRequired,
};

class ToggleableTimerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enableEditing: false,
    };

    // toggle edit permissions
    this.handleEditPermission = this.handleEditPermission.bind(this);

    // percolate changes to parent
    this.handleCreateTimer = this.handleCreateTimer.bind(this);
  }

  handleEditPermission() {
    this.setState({
      enableEditing: !this.state.enableEditing,
    });
  }

  handleCreateTimer(newTimer) {
    this.props.onCreateTimer(newTimer);
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
              onSubmitForm={this.handleCreateTimer}
            /> :
            <button onClick={this.handleEditPermission}>+</button>}
        </center>
      </div>
    );
  }
}

ToggleableTimerForm.propTypes = propTypes;

export default ToggleableTimerForm;
