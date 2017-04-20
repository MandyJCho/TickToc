import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  elapsed: PropTypes.number,
  start: PropTypes.number,
};

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="timer">
        <div>
          {this.props.title}
        </div>
        <div>
          {this.props.elapsed}
        </div>
        <div>
          {this.props.start}
        </div>
        <div>
          <button>start</button>
          <button>edit</button>
          <button>delete</button>
        </div>
      </div>
    );
  }
}

Timer.propTypes = propTypes;

export default Timer;
