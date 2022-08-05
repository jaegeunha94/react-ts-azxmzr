import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UseReducer from './src/Hook/UseReducer/UseReducer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UseReducer />} />
      </Routes>
    </Router>
  );
}
