import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlockRender from './src/Hook/UseRef/BlockRender';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlockRender />} />
      </Routes>
    </Router>
  );
}
