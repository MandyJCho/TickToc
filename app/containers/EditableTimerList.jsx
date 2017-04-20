import React from 'react';
import EditableTimer from './EditableTimer';

export default class EditableTimerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <EditableTimer
          title="Practice React"
          elapsed={123456}
          start={null}
        />
        <EditableTimer
          title="Make dinner"
          elapsed={15}
          start={null}
          enableEditing={true}
        />
      </div>
    );
  }
}
