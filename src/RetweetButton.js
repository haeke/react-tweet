import React, { Component } from 'react';

class RetweetButton extends Component {
  constructor(props) {
    super(props);

    this.getRetweetCount = this.getRetweetCount.bind(this);
  }

  getRetweetCount(count) {
    if (count > 0) {
      return (
        <span>
          {count}
        </span>
      );
    } else {
      return null;
    }
  }

  render() {
    const { count } = this.props.retweets;
    return (
      <span>
        <i className="fa fa-retweet retweet-button" />
        {this.getRetweetCount(count)}
      </span>
    );
  }
}

export default RetweetButton;
