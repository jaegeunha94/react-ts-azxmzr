import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UuidTest from './src/npm/uuid/UuidTest';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UuidTest />} />
      </Routes>
    </Router>
  );
}
