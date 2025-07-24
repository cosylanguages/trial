// This component will display a single word, its translation, and an example sentence.

import React from 'react';

function WordCard({ word }) {
  return (
    <div className="word-card">
      <h3>{word.word}</h3>
      <p>{word.translation}</p>
      <p><em>{word.example}</em></p>
    </div>
  );
}

export default WordCard;
