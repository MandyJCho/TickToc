import React from 'react';
import PropTypes from 'prop-types';

import Timer from '../components/Timer';
import TimerForm from '../components/TimerForm';

const proptypes = {
  title: PropTypes.string,
  elapsedTime: PropTypes.number,
  startTime: PropTypes.number,
  uuid: PropTypes.string,
  onSubmitForm: PropTypes.func.isRequired,
  onDeleteTimer: PropTypes.func.isRequired,
  onSetStartTime: PropTypes.func.isRequired,
};

class EditableTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enableEditing: false,
    };

    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleDeleteTimer = this.handleDeleteTimer.bind(this);
    this.handleSetStartTime = this.handleSetStartTime.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleRequestEdit = this.handleRequestEdit.bind(this);
  }

  handleCloseForm() {
    this.setState({
      enableEditing: false,
    });
  }

  handleDeleteTimer(uuid) {
    this.props.onDeleteTimer(uuid);
  }

  handleRequestEdit() {
    this.setState({
      enableEditing: true,
    });
  }

  handleSetStartTime(newStartTime, uuid) {
    this.props.onSetStartTime(newStartTime, uuid);
  }

  handleSubmitForm(newTitle, uuid) {
    this.props.onSubmitForm(newTitle, uuid);
    this.handleCloseForm();
  }

  render() {
    return (
      <div>
        <center>
          { this.state.enableEditing ?
            <TimerForm
              title={this.props.title}
              submitText="Update"
              uuid={this.props.uuid}
              onCloseForm={this.handleCloseForm}
              onSubmitForm={this.handleSubmitForm}
            /> :
            <Timer
              title={this.props.title}
              elapsedTime={this.props.elapsedTime}
              startTime={this.props.startTime}
              uuid={this.props.uuid}
              onRequestEdit={this.handleRequestEdit}
              onDeleteTimer={this.handleDeleteTimer}
              onSetStartTime={this.handleSetStartTime}
            />
          }
        </center>
      </div>
    );
  }
}

EditableTimer.propTypes = proptypes;

export default EditableTimer;
