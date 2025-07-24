// This component will define the routes for the different modes of the application.

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Freestyle from './Freestyle';
import StudyMode from './StudyMode';
import Community from './Community';

function AppRouter() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/freestyle">Freestyle</Link>
          </li>
          <li>
            <Link to="/study">Study Mode</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/freestyle" element={<Freestyle />} />
        <Route path="/study" element={<StudyMode />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
