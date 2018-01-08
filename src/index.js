import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tweet from './Tweet';
import skywalkerTweet from './data';

ReactDOM.render(<Tweet skywalkerTweet={skywalkerTweet}/>, document.querySelector('#root'));
