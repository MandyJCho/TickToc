import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  elapsedTime: PropTypes.number,
  startTime: PropTypes.number,
  uuid: PropTypes.string,
  onRequestEdit: PropTypes.func.isRequired,
  onDeleteTimer: PropTypes.func.isRequired,
  onSetStartTime: PropTypes.func.isRequired,
};

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: '',
    };

    this.handleDeleteForm = this.handleDeleteForm.bind(this);
    this.handleIncrementTimer = this.handleIncrementTimer.bind(this);
  }

  componentDidMount() {
    this.state.interval = setInterval(this.handleIncrementTimer, 1000);
    this.props.onSetStartTime(this.props.uuid);
  }

  componentWillUnMount() {
    clearInterval(this.state.interval);
  }

  handleControlTimer() {

  }

  handleDeleteForm() {
    this.props.onDeleteTimer(this.props.uuid);
  }

  handleIncrementTimer(uuid) {

  }

  render() {
    let displayTime = window.helper.calculateElapsedTime(this.props.elapsedTime,
                                                            this.props.startTime);
    displayTime = window.helper.convertMsToHMS(displayTime);

    const controlTimerText = this.props.startTime ? 'pause' : 'start';

    return (
      <div className="timer">
        <div>
          {this.props.title}
        </div>
        <div>
          {displayTime}
        </div>
        <div className="btn-container">
          <button onClick={this.handleControlTimer}>{controlTimerText}</button>
          <button onClick={this.props.onRequestEdit}>edit</button>
          <button onClick={this.handleDeleteForm}>delete</button>
        </div>
      </div>
    );
  }
}

Timer.propTypes = propTypes;

export default Timer;
