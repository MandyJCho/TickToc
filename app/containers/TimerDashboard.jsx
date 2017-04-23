import React from 'react';
import uuid from 'uuid';

import TimerList from './EditableTimerList';
import ToggleableTimerForm from '../components/ToggleableTimerForm';

export default class TimerDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timers: [
        {
          title: 'Practice React',
          elapsedTime: 12345,
          startTime: Date.now(),
          uuid: uuid.v4(),
        },
        {
          title: 'Make Dinner',
          elapsedTime: 19495,
          startTime: 1492979258076,
          uuid: uuid.v4(),
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <TimerList timers={this.state.timers} />
        <ToggleableTimerForm enableEditing={true} />
      </div>
    );
  }
}
