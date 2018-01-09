import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tweet from './Tweet';
import swTweets from './data';

ReactDOM.render(<Tweet swTweets={swTweets}/>, document.querySelector('#root'));
