import React, { Component } from 'react';

class Time extends Component {
  render() {
    const { currentTime } = this.props;
    return (
      <span className="time">{currentTime}</span>
    );
  }
}

export default Time;
