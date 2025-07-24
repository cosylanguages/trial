// This component will display a single user post.

import React from 'react';

function Post({ post }) {
  return (
    <div className="post">
      <h3>{post.author}</h3>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
