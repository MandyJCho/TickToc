import React from 'react';
import PropTypes from 'prop-types';

import Timer from '../components/Timer';
import TimerForm from '../components/TimerForm';

const proptypes = {
  title: PropTypes.string,
  elapsedTime: PropTypes.number,
  startTime: PropTypes.number,
  uuid: PropTypes.string,
};

class EditableTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enableEditing: false,
    };
    this.handleRequestEdit = this.handleRequestEdit.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
  }

  handleRequestEdit() {
    this.setState({
      enableEditing: true,
    });
  }

  handleCloseForm() {
    this.setState({
      enableEditing: false,
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <center>
          { this.state.enableEditing ?
            <TimerForm
              title={this.props.title}
              submitText="Update"
              uuid={this.props.uuid}
              onCloseForm={this.handleCloseForm}
            /> :
            <Timer
              title={this.props.title}
              elapsedTime={this.props.elapsedTime}
              startTime={this.props.startTime}
              uuid={this.props.uuid}
              onRequestEdit={this.handleRequestEdit}
            />
          }
        </center>
      </div>
    );
  }
}

EditableTimer.propTypes = proptypes;

export default EditableTimer;
