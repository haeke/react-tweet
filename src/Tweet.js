import React, { Component } from 'react';
import Avatar from './Avatar';
import Message from './Message';
import NameWithHandle from './NameWithHandle';
import Time from './Time';
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import LikeButton from './LikeButton';
import MoreOptionsButton from './MoreOptionsButton';
import Comments from './Comments';
import PropTypes from 'prop-types';

class Tweet extends Component {
  render() {
    const { author, timestamp, message, retweets, likes } = this.props.skywalkerTweet;
    return (
      <div>
        <div className="tweet">
          <Avatar />
          <div className="content">
            <NameWithHandle name={author.name} handle={author.handle}/>
            <Time currentTime={timestamp} />
            <Message message={message}/>
            <div className="buttons">
              <ReplyButton />
              <RetweetButton retweets={retweets} />
              <LikeButton likes={likes} />
              <MoreOptionsButton />
            </div>
          </div>
        </div>
        <div>
          <Comments
            handle={author.handle}
            comment={message}
            likes={likes}
            />
        </div>
      </div>
    );
  }
}

Tweet.propTypes = {
  skywalkerTweet: PropTypes.shape({
    author: PropTypes.shape({
      handle: PropTypes.string,
      name: PropTypes.string,
    }),
    message: PropTypes.string,
    likes: PropTypes.number,
  }).isRequired,
};

export default Tweet;
