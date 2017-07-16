import React, { Component } from 'react';

class NameWithHandle extends Component {
  render() {
    return (
      <span className="name-with-handle">
        <span className="name">Luke Skywalker</span>
        <span className="handle">@lukeskywalker</span>
      </span>
    );
  }
}

export default NameWithHandle;
