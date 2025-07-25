// This component will contain the study mode of the application.
// Users will be guided through a structured learning path.

import React, { useState, useEffect } from 'react';
import WordCard from './WordCard';
import vocabulary from './vocabulary.json';

function StudyMode() {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // In a real application, you would fetch this data from an API.
    setWords(vocabulary);
  }, []);

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const progress = ((currentWordIndex + 1) / words.length) * 100;

  return (
    <div>
      <h2>Study Mode</h2>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      {words.length > 0 && <WordCard word={words[currentWordIndex]} />}
      <button onClick={handleNextWord}>Next</button>
    </div>
  );
}

export default StudyMode;
