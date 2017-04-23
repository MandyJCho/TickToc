import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  elapsedTime: PropTypes.number,
  startTime: PropTypes.number,
  uuid: PropTypes.string,
  onRequestEdit: PropTypes.func.isRequired,
};

function Timer(props) {
  console.log(props);
  let displayTime = window.helper.calculateElapsedTime(props.elapsedTime, props.startTime);
  displayTime = window.helper.convertMsToHMS(displayTime);

  return (
    <div className="timer">
      <div>
        {props.title}
      </div>
      <div>
        {displayTime}
      </div>
      <div className="btn-container">
        <button>start</button>
        <button onClick={props.onRequestEdit}>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
}

Timer.propTypes = propTypes;

export default Timer;
