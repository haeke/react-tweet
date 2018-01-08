import React, { Component } from 'react';

class RetweetButton extends Component {
  constructor(props) {
    super(props);

    this.getRetweetCount = this.getRetweetCount.bind(this);
  }

  getRetweetCount() {
    if (this.props.retweets > 0) {
      return (
        <span>
          {this.props.retweets}
        </span>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <span>
        <i className="fa fa-retweet retweet-button" />
        {this.getRetweetCount()}
      </span>
    );
  }
}

export default RetweetButton;
