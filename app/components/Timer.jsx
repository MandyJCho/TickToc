timer - comp
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
      elapsedTime: this.props.elapsedTime,
    };

    this.handleDeleteForm = this.handleDeleteForm.bind(this);
    this.handleSetStartTime = this.handleSetStartTime.bind(this);
    this.incrementTime = this.incrementTime.bind(this);
  }

  //
  componentDidMount() {
    if (this.props.startTime) {
      this.interval = setInterval(this.incrementTime, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  incrementTime() {
    console.log('state', this.state);
    this.setState({
      elapsedTime: this.state.elapsedTime + 1000,
    });
  }

  /**
   * percolates up a delete request to EditableTimer
   */
  handleDeleteForm() {
    this.props.onDeleteTimer(this.props.uuid);
  }

  /**
   * percolates a state change of the start and elapsed times
   */
  handleSetStartTime() {
    let newStartTime;

    if (this.props.startTime) {
      // pause the timer and clear the interval
      newStartTime = { elapsedTime: this.state.elapsedTime, startTime: null };
      clearInterval(this.interval);
    } else {
      // start the timer and create an interval
      newStartTime = { elapsedTime: this.state.elapsedTime, startTime: Date.now() };
      this.interval = setInterval(this.incrementTime, 1000);
    }

    this.props.onSetStartTime(newStartTime, this.props.uuid);
  }

  /**
   * formats the elapsed time to HH:MM:SS
   * @returns {string}
   */
  formatDisplayTime() {
    return window.helper.convertMsToHMS(this.state.elapsedTime);
  }

  /**
   * Renders timer component
   * @returns {XML}
   */
  render() {
    const displayTime = this.formatDisplayTime();
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
          <button onClick={this.handleSetStartTime}>{controlTimerText}</button>
          <button onClick={this.props.onRequestEdit}>edit</button>
          <button onClick={this.handleDeleteForm}>delete</button>
        </div>
      </div>
    );
  }
}

Timer.propTypes = propTypes;

export default Timer;
