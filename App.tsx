import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorTest from './src/Error/ErrorTest';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ErrorTest />} />
      </Routes>
    </Router>
  );
}
