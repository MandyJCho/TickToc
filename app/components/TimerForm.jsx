import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
};

class TimerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="timer" >
        <input className="form" value={this.props.title} />
        <div>
          <button>Update</button>
          <button>Cancel</button>
        </div>
      </div>
    );
  }
}

TimerForm.propTypes = propTypes;

export default TimerForm;
