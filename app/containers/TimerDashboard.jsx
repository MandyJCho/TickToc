/*eslint-disable */

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
          elapsedTime: 1234542,
          startTime: null,
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

    this.handleSubmitform = this.handleSubmitform.bind(this);
    this.handleCreateTimer = this.handleCreateTimer.bind(this);
  }

  handleSubmitform(nextState) {
    // update timers array with nextState
    const updatedTimers = this.state.timers.map(
      timer => (timer.uuid === nextState.uuid)
          ? (Object.assign({}, timer, { title: nextState.title })) : timer
    );

    // set state
    this.setState({
      timers: updatedTimers,
    });
  }

  handleCreateTimer(newState){
    this.setState({
      timers: Object.assign({}, timers, {
        title: newState.title,
        elapsedTime: 0,
        startTime: Date.now(),
        uuid: uuid.v4(),
      }),
    });
  }


  render() {
    return (
      <div>
        <TimerList
          timers={this.state.timers}
          onSubmitForm={this.handleSubmitform}
          onControlTimer={this.handleControlTimer}
        />
        <ToggleableTimerForm
          enableEditing={true}
          onSubmitForm={this.handleSubmitform}
          onCreateTimer={this.handleCreateTimer}
        />
      </div>
    );
  }
}
