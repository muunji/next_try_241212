import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FormPage from './components/FormPage';
import APage from './components/APage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/a" element={<APage />} />
      </Routes>
    </Router>
  );
}

export default App;