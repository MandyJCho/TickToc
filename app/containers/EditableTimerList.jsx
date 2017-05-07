import React from 'react';
import PropTypes from 'prop-types';

import EditableTimer from './EditableTimer';

const propTypes = {
  timers: PropTypes.array,
  onSubmitForm: PropTypes.func.isRequired,
  onDeleteTimer: PropTypes.func.isRequired,
};

function EditableTimerList(props) {
  function handleSubmitForm(nextState) {
    props.onSubmitForm(nextState);
  }

  function handleDeleteTimer(uuid) {
    props.onDeleteTimer(uuid);
  }

  const timers = props.timers.map(timer => (
    <EditableTimer
      title={timer.title}
      elapsedTime={timer.elapsedTime}
      startTime={timer.startTime}
      onSubmitForm={handleSubmitForm.bind(this)}
      onDeleteTimer={handleDeleteTimer.bind(this)}
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
