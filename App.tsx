import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MaterialUITest from './src/npm/MaterialUI/MaterialUITest';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MaterialUITest />} />
      </Routes>
    </Router>
  );
}
