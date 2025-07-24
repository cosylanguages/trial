// This component will contain the study mode of the application.
// Users will be guided through a structured learning path.

import React, { useState, useEffect } from 'react';
import WordList from './WordList';
import vocabulary from './vocabulary.json';

function StudyMode() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch this data from an API.
    setWords(vocabulary);
  }, []);

  return (
    <div>
      <h2>Study Mode</h2>
      <WordList words={words} />
    </div>
  );
}

export default StudyMode;
