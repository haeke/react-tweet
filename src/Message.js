import React, { Component } from 'react';

class Message extends Component {
  render() {
    const { message } = this.props;
    return (
      <div className="message">
        {message}
      </div>
    );
  }
}

export default Message;
