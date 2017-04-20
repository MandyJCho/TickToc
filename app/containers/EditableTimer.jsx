import React from 'react';
import PropTypes from 'prop-types';

import Timer from '../components/Timer';
import TimerForm from '../components/TimerForm';

const proptypes = {
  title: PropTypes.string,
  elapsed: PropTypes.number,
  start: PropTypes.number,
  enableEditing: PropTypes.bool,
};

class EditableTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="timer">
        <center>
          { this.props.enableEditing ?
            <Timer
              title={this.props.title}
              elapsed={this.props.elapsed}
              start={this.props.start}
            />
            : <TimerForm title={this.props.title} /> }
        </center>
      </div>
    );
  }
}

EditableTimer.propTypes = proptypes;

export default EditableTimer;
