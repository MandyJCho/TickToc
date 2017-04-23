import React from 'react';
import PropTypes from 'prop-types';

import EditableTimer from './EditableTimer';

const propTypes = {
  timers: PropTypes.array,
};

function EditableTimerList(props) {
  const timers = props.timers.map(timer => (
    <EditableTimer
      title={timer.title}
      elapsedTime={timer.elapsedTime}
      startTime={timer.startTime}
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
