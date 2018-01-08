import React, { Component } from 'react';

class LikeButton extends Component {
  constructor(props) {
    super(props);

    this.getLikeCount = this.getLikeCount.bind(this);
  }

  getLikeCount() {
    if (this.props.likes > 0) {
      return (
        <span className="like-count">
          {this.props.likes}
        </span>
      );
    }
  }

  render() {
    return (
      <span>
        <i className="fa fa-reply reply-button">
          {this.getLikeCount()}
        </i>
      </span>
    );
  }
}

export default LikeButton;
