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
    this.handleUpdateTimer = this.handleUpdateTimer.bind(this);
    this.handleDeleteTimer = this.handleDeleteTimer.bind(this);

    // Individual timer changes
    this.handleIncrementTimer = this.handleUpdateTimer.bind(this);

    // Generic timer updater
    this.updateTimer = this.updateTimer.bind(this);
  }

  /**
   * updates the title of a timer
   * @param nextState
   */
  handleUpdateTimer(nextState) {
    // update timers array with nextState
    const newStateTimers = this.updateTimer({ title: nextState.title });

    this.setState({
      timers: updatedTimers,
    });
  }

  /**
   * creates a new timer
   * @param newState
   */
  handleCreateTimer(newState){
     const newStateTimers = this.state.timers.concat( [{
      title: newState.title,
      elapsedTime: 0,
      startTime: Date.now(),
      uuid: uuid.v4(),
    }]);

    this.setState({
      timers: updatedTimers,
    });
  }

  /**
   * deletes a timer
   * @param uuid
   */
  handleDeleteTimer(uuid) {
    const updatedTimers = this.state.timers.filter((timer) => timer.uuid !== uuid);

    this.setState({
      timers: updatedTimers,
    });
  }

  /**
   * increments the time on each function
   * @param uuid
   */
  handleIncrementTimer(uuid) {
    const newStateTimers = this.updateTimer()
  }

  /**
   * generic timer updater that takes a desired attribute to alter
   * @param updateValue
   * @returns {Array}
   */
  updateTimer(uuid, updateValue) {
    // update timers array with nextState
    return this.state.timers.map(
      timer => (timer.uuid === uuid)
        ? (Object.assign({}, timer, updateValue)) : timer
    );
  }

  render() {
    return (
      <div>
        <EditableTimerList
          timers={this.state.timers}
          onSubmitForm={this.handleUpdateTimer}
          onDeleteTimer={this.handleDeleteTimer}
        />
        <ToggleableTimerForm
          onSubmitForm={this.handleUpdateTimer}
          onCreateTimer={this.handleCreateTimer}
        />
      </div>
    );
  }
}
