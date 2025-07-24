// This component will display the words within a selected category.

import React from 'react';
import WordCard from './WordCard';

function Category({ category }) {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="word-list">
        {category.words.map((word) => (
          <WordCard key={word.id} word={word} />
        ))}
      </div>
    </div>
  );
}

export default Category;
