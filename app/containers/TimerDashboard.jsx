/*eslint-disable */

import React from 'react';
import uuid from 'uuid';

import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from '../components/ToggleableTimerForm';

export default class TimerDashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(Date.now());
    this.state = {
      timers: [
        {
          title: 'Practice React',
          elapsedTime: 134542,
          startTime: null,
          uuid: uuid.v4(),
        },
        {
          title: 'Make Dinner',
          elapsedTime: 19495,
          startTime: 1494173395365,
          uuid: uuid.v4(),
        },
      ],
    };

    // CRUD
    this.handleCreateTimer = this.handleCreateTimer.bind(this);
    this.handleUpdateForm = this.handleUpdateForm.bind(this);
    this.handleDeleteTimer = this.handleDeleteTimer.bind(this);
  }

  handleUpdateForm(nextState) {
    // update timers array with nextState
    const updatedTimers = this.state.timers.map(
      timer => (timer.uuid === nextState.uuid)
          ? (Object.assign({}, timer, { title: nextState.title })) : timer
    );

    this.setState({
      timers: updatedTimers,
    });
  }

  handleCreateTimer(newState){
     const updatedTimers = this.state.timers.concat( [{
      title: newState.title,
      elapsedTime: 0,
      startTime: Date.now(),
      uuid: uuid.v4(),
    }]);

    this.setState({
      timers: updatedTimers,
    });
  }

  handleDeleteTimer(uuid) {
    const updatedTimers = this.state.timers.filter((timer) => timer.uuid !== uuid);

    this.setState({
      timers: updatedTimers,
    });
  }

  handleIncrementTimer(uuid){

  }

  render() {
    return (
      <div>
        <EditableTimerList
          timers={this.state.timers}
          onSubmitForm={this.handleUpdateForm}
          onDeleteTimer={this.handleDeleteTimer}
        />
        <ToggleableTimerForm
          onSubmitForm={this.handleUpdateForm}
          onCreateTimer={this.handleCreateTimer}
        />
      </div>
    );
  }
}
