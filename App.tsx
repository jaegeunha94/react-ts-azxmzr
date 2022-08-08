import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReduxCounter from './src/Context/Redux/ReduxCounter';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReduxCounter />} />
      </Routes>
    </Router>
  );
}
