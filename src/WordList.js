// This component will display a list of WordCard components.

import React from 'react';
import WordCard from './WordCard';

function WordList({ words }) {
  return (
    <div className="word-list">
      {words.map((word) => (
        <WordCard key={word.id} word={word} />
      ))}
    </div>
  );
}

export default WordList;
