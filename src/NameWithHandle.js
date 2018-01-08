import React, { Component } from 'react';

class NameWithHandle extends Component {
  render() {
    const { name, handle } = this.props;
    return (
      <span className="name-with-handle">
        <span className="name">{name}</span>
        <span className="handle">{handle}</span>
      </span>
    );
  }
}

export default NameWithHandle;
