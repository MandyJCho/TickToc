/*eslint-disable */

import React from 'react';
import {v4 as uuid} from 'uuid';

import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from '../components/ToggleableTimerForm';

export default class TimerDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      '51e3b57c-e350-4dcf-8a4e-8371725f18de': {
        title: 'Practice React',
        elapsedTime: 1454200,
        startTime: Date.now(),
        uuid: '51e3b57c-e350-4dcf-8a4e-8371725f18de',
      },
      '3fe615bb-616e-4f7c-9c24-7eaa29d50537': {
        title: 'Make Dinner',
        elapsedTime: 19495,
        startTime: null,
        uuid: '3fe615bb-616e-4f7c-9c24-7eaa29d50537',
      },
    };

    // CRUD
    this.handleCreateTimer = this.handleCreateTimer.bind(this);
    this.handleUpdateTimer = this.handleUpdateTimer.bind(this);
    this.handleDeleteTimer = this.handleDeleteTimer.bind(this);
  }

  /**
   * creates a new timer
   * @param newState
   */
  handleCreateTimer(newTimer) {
    const newUUID = uuid();

    this.setState({
      [newUUID]: {
        title: newTimer.title,
        elapsedTime: 0,
        startTime: Date.now(),
        uuid: newUUID,
      }
    });
  }

  /**
   * generic timer updater that takes a desired attribute to alter
   * @param updateValue
   * @returns {Array}
   */
  handleUpdateTimer(updateValue, uuid) {
    // update timers array in state with updateValue
    const updatedTimers =  this.state.timers.map(
      timer => (timer.uuid === uuid)
        ? (Object.assign({}, timer, updateValue)) : timer
    );

    this.setState({ timers: updatedTimers });
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
   * Render components
   * @returns {XML}
   */
  render() {
    return (
      <div>
        <EditableTimerList
          timers={this.state.timers}
          onSubmitForm={this.handleUpdateTimer}
          onDeleteTimer={this.handleDeleteTimer}
          onSetStartTime={this.handleUpdateTimer}
        />
        <ToggleableTimerForm
          onCreateTimer={this.handleCreateTimer}
        />
      </div>
    );
  }
}
