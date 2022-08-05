import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactLazyMain from './src/Performance/ReactLazy/ReactLazyMain';
import ReactLazy from './src/Performance/ReactLazy/ReactLazy';
import ReactLazyTest from './src/Performance/ReactLazy/ReactLazyTest';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactLazyTest />} />
        <Route path="/main" element={<ReactLazyMain />} />
      </Routes>
    </Router>
  );
}
