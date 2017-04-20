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
      <div>
        {this.props.title}
        {this.props.elapsed}
        {this.props.start}
        <div>
          <button>start</button>
        </div>
      </div>
    );
  }
}

Timer.propTypes = propTypes;

export default Timer;
