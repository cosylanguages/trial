// This is the main component of the application.
// It will be responsible for rendering the different modes of the application.

import React from 'react';
import AppRouter from './Router';

function App() {
  return (
    <div className="app">
      <h1>COSYlanguages</h1>
      <AppRouter />
    </div>
  );
}

export default App;
