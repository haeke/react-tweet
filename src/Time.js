import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Time extends Component {
  render() {
    const currentTime = moment(this.props.currentTime).fromNow();
    return (
      <span className="time">{currentTime}</span>
    );
  }
}

//make sure that the currentTime variable is a number
Time.propTypes = {
  currentTime: PropTypes.string,
};

export default Time;
