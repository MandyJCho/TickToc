import React from 'react';

import TimerList from './EditableTimerList';
import ToggleableTimerForm from '../components/ToggleableTimerForm';

export default class TimerDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TimerList />
        <ToggleableTimerForm enableEditing={true} />
      </div>
    );
  }
}
