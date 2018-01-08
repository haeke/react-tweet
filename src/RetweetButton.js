import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RetweetButton extends Component {
  constructor(props) {
    super(props);

    this.getRetweetCount = this.getRetweetCount.bind(this);
  }

  getRetweetCount(retweets) {
    if (retweets > 0) {
      return (
        <span className='retweet-count'>
          {retweets}
        </span>
      );
    } else {
      return null;
    }
  }

  render() {
    const { retweets } = this.props;
    return (
      <span>
        <i className="fa fa-retweet retweet-button">
          {this.getRetweetCount(retweets)}
        </i>
      </span>
    );
  }
}

RetweetButton.propTypes = {
  retweets: PropTypes.number,
};

export default RetweetButton;
