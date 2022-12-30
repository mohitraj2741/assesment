import React, { useState } from 'react';

function Setup() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  function handlePostComment(event) {
    event.preventDefault();

    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  }

  return (
    <>
      <ul id="commentList">
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <form>
        <input
          type="text"
          id="comment"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        />
        <input
          type="button"
          id="postComment"
          value="Post"
          onClick={handlePostComment}
        />
      </form>
    </>
  );
}

export default Setup;