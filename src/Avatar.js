import React, { Component } from 'react';

class Avatar extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.avatar}
          className="avatar"
          alt="avatar" />
      </div>
    );
  }
}

export default Avatar;
