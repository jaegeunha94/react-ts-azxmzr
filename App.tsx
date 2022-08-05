import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MomentTest from './src/npm/Moment/Moment';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MomentTest />} />
      </Routes>
    </Router>
  );
}
