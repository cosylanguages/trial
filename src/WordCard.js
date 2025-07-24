// This component will display a single word, its translation, and an example sentence.

import React, { useState } from 'react';

function WordCard({ word }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="word-card" onClick={handleFlip}>
      {isFlipped ? (
        <div>
          <h3>{word.translation}</h3>
          <p><em>{word.example}</em></p>
        </div>
      ) : (
        <h3>{word.word}</h3>
      )}
    </div>
  );
}

export default WordCard;
