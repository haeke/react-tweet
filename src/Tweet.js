import React, { Component } from 'react';
import Avatar from './Avatar';
import Message from './Message';
import NameWithHandle from './NameWithHandle';
import Time from './Time';
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import LikeButton from './LikeButton';
import MoreOptionsButton from './MoreOptionsButton';
import PropTypes from 'prop-types';

class Tweet extends Component {
  render() {
    const { swTweets } = this.props;
    const tweets = swTweets.map(tweet => {
      return (
        <div key={tweet.id}>
          <div className="tweet">
            <Avatar avatar={tweet.author.photo} />
            <div className="content">
              <NameWithHandle name={tweet.author.name} handle={tweet.author.handle}/>
              <Time currentTime={tweet.timestamp} />
              <Message message={tweet.message}/>
              <div className="buttons">
                <ReplyButton />
                <RetweetButton retweets={tweet.retweets} />
                <LikeButton likes={tweet.likes} />
                <MoreOptionsButton />
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {tweets}
      </div>
    );
  }
}

Tweet.propTypes = {
  swTweets: PropTypes.array,
};

export default Tweet;
