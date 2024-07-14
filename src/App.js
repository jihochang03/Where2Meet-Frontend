// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './routes/MainPage';
import ResultPage from './routes/ResultPage';
import './App.css';

const App = () => {
  const [results, setResults] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage setResults={setResults} />} />
        <Route path="/result" element={<ResultPage results={results} setResults={setResults} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;