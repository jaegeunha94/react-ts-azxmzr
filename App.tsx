import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UseMemo from './src/Hook/UseMemo/UseMemo';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UseMemo />} />
      </Routes>
    </Router>
  );
}
