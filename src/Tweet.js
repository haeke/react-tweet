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

class Tweet extends Component {
  render() {
    var skywalkerTweet = {
      message: 'Echo Three to Echo Seve, @Han, old buddy, do you read me?',
      author: {
        name: 'Luke Skylwalker',
        handle: '@lukeskywalker',
      },
      likes: 3,
      retweets: 42,
      timestamp: '2017-11-20 21:24:37',
    };

    return (
      <div>
        <div className="tweet">
          <Avatar />
          <div className="content">
            <NameWithHandle name={skywalkerTweet.author.name} handle={skywalkerTweet.author.handle}/>
            <Time currentTime={skywalkerTweet.timestamp} />
            <Message message={skywalkerTweet.message}/>
            <div className="buttons">
              <ReplyButton />
              <RetweetButton retweets={skywalkerTweet.retweets} />
              <LikeButton likes={skywalkerTweet.likes} />
              <MoreOptionsButton />
            </div>
          </div>
        </div>
        <div>
          <Comments
            handle={skywalkerTweet.author.handle}
            comment={skywalkerTweet.message}
            likes={skywalkerTweet.likes}
            />
        </div>
      </div>
    );
  }
}

export default Tweet;
