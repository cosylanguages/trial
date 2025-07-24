// This component will define the routes for the different modes of the application.

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
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
        {/* This is the default route that redirects to the freestyle page. */}
        <Route path="/" element={<Navigate to="/freestyle" />} />
        <Route path="/freestyle" element={<Freestyle />} />
        <Route path="/study" element={<StudyMode />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
