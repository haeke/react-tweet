import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comments extends Component {
  render() {
    const { handle, comment, likes } = this.props;
    return (
      <div>
        <div className="author">{handle}</div>
        <div className="author-comment">{comment}</div>
        <div className="likes">
          {likes > 0 ? likes : 'No '} likes
        </div>
      </div>
    );
  }
}

//make sure that there is an author, comment that likes is a number
//Both handle and comment are required
Comments.propTypes = {
  handle: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Comments;
