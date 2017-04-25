import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  elapsedTime: PropTypes.number,
  startTime: PropTypes.number,
  uuid: PropTypes.string,
  onRequestEdit: PropTypes.func.isRequired,
  onControlTimer: PropTypes.func,isRequired,
};

function Timer(props) {
  let displayTime = window.helper.calculateElapsedTime(props.elapsedTime, props.startTime);
  displayTime = window.helper.convertMsToHMS(displayTime);

  const controlTimerText = props.startTime ? 'pause' : 'start';

  return (
    <div className="timer">
      <div>
        {props.title}
      </div>
      <div>
        {displayTime}
      </div>
      <div className="btn-container">
        <button>{controlTimerText}</button>
        <button onClick={props.onRequestEdit}>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
}

Timer.propTypes = propTypes;

export default Timer;
