// This component will display a list of Post components.

import React from 'react';
import Post from './Post';

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
