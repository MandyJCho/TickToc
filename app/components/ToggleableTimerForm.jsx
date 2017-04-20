import React from 'react';
import PropTypes from 'prop-types';

import TimerForm from './TimerForm';

const propTypes = {
  enableEditing: PropTypes.bool,
};

class ToggleableTimerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <center>
          {this.props.enableEditing ? <TimerForm /> : <button>+</button>}
        </center>
      </div>
    );
  }
}

ToggleableTimerForm.propTypes = propTypes;

export default ToggleableTimerForm;
