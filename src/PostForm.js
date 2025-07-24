// This component will allow users to create new posts.

import React, { useState } from 'react';

function PostForm({ onAddPost }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    onAddPost({
      id: Date.now(),
      author: 'Anonymous', // In a real app, you would get the author from the logged-in user.
      content,
    });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;
