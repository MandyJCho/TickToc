import React from 'react';
import PropTypes from 'prop-types';

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
      <div>Toggle ++++</div>
    );
  }
}


ToggleableTimerForm.propTypes = propTypes;

export default ToggleableTimerForm;
