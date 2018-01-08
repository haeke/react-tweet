import React, { Component } from 'react';
import Avatar from './Avatar';
import Message from './Message';
import NameWithHandle from './NameWithHandle';
import Time from './Time';
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import LikeButton from './LikeButton';
import MoreOptionsButton from './MoreOptionsButton';

class Tweet extends Component {
  render() {
    return (
      <div className="tweet">
        <Avatar />
        <div className="content">
          <NameWithHandle name='Luke Sykwalker' handle='@lukeskywalker'/>
          <Time />
          <Message />
          <div className="buttons">
            <ReplyButton />
            <RetweetButton />
            <LikeButton />
            <MoreOptionsButton />
          </div>
        </div>
      </div>
    );
  }
}

export default Tweet;
