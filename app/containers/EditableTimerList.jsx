import React from 'react';
import PropTypes from 'prop-types';

import EditableTimer from './EditableTimer';

const propTypes = {
  timers: PropTypes.array,
  onSubmitForm: PropTypes.func.isRequired,
  onDeleteTimer: PropTypes.func.isRequired,
  onSetStartTime: PropTypes.func.isRequired,
};

function EditableTimerList(props) {
  /**
   * percolates new timer name and uuid to parent
   * @param nextState
   */
  function handleSubmitForm(nextState) {
    props.onSubmitForm(nextState);
  }

  /**
   * percolates uuid of timer to delete
   * @param uuid
   */
  function handleDeleteTimer(uuid) {
    props.onDeleteTimer(uuid);
  }

  /**
   * percolates a new startTime to dashboard
   * @param uuid
   * @param newStartTime
   */
  function handleSetStartTime(uuid, newStartTime) {
    props.onSetStartTime(uuid, newStartTime);
  }

  // generate new timers
  const timers = props.timers.map(timer => (
    <EditableTimer
      title={timer.title}
      elapsedTime={timer.elapsedTime}
      startTime={timer.startTime}
      onSubmitForm={handleSubmitForm.bind(this)}
      onDeleteTimer={handleDeleteTimer.bind(this)}
      onSetStartTime={handleSetStartTime.bind(this)}
      uuid={timer.uuid}
      key={timer.uuid}
    />
  ));

  return (
    <div>
      {timers}
    </div>
  );
}

EditableTimerList.propTypes = propTypes;

export default EditableTimerList;
