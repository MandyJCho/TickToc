import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  elapsedTime: PropTypes.number,
  startTime: PropTypes.number,
  uuid: PropTypes.string,
  onRequestEdit: PropTypes.func.isRequired,
  onDeleteTimer: PropTypes.func.isRequired,
  onSetStartTime: PropTypes.func.isRequired,
};

function Timer(props) {
  /**
   * percolates up a delete request to EditableTimer
   */
  function handleDeleteForm() {
    props.onDeleteTimer(props.uuid);
  }

  function handleSetStartTime() {
    const newStartTime = props.startTime ? null : Date.now();
    props.onSetStartTime(props.uuid, newStartTime);
  }

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
        <button onClick={handleSetStartTime}>{controlTimerText}</button>
        <button onClick={props.onRequestEdit}>edit</button>
        <button onClick={handleDeleteForm}>delete</button>
      </div>
    </div>
  );
}

Timer.propTypes = propTypes;

export default Timer;
