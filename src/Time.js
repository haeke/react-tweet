import React, { Component } from 'react';
import moment from 'moment';

class Time extends Component {
  render() {
    const currentTime = moment(this.props.currentTime).fromNow();
    return (
      <span className="time">{currentTime}</span>
    );
  }
}

export default Time;
