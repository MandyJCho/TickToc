import React from 'react';
import PropTypes from 'prop-types';

import EditableTimer from './EditableTimer';

const propTypes = {
  timers: PropTypes.array,
  onSubmitForm: PropTypes.func,
};


function EditableTimerList(props) {
  function handleSubmitForm(nextState) {
    props.onSubmitForm(nextState);
  }

  const timers = props.timers.map(timer => (
    <EditableTimer
      title={timer.title}
      elapsedTime={timer.elapsedTime}
      startTime={timer.startTime}
      onSubmitForm={handleSubmitForm.bind(this)}
      uuid={timer.uuid}
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
