import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReduxTooolkitMain from './src/Context/ReduxToolkit/ReduxToolkitMain';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReduxTooolkitMain />} />
      </Routes>
    </Router>
  );
}
