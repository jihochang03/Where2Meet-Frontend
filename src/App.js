// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './routes/MainPage';
import ResultPage from './routes/ResultPage';
import './App.css';

const App = () => {
  const [results, setResults] = useState([]);
  const [startPoints, setStartPoints] = useState([
    { id: 1, place_name: '', road_address_name: '', lon: '', lat: '' },
    { id: 2, place_name: '', road_address_name: '', lon: '', lat: '' },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage setResults={setResults} startPoints={startPoints} setStartPoints={setStartPoints} />} />
        <Route path="/result" element={<ResultPage results={results} setResults={setResults} startPoints={startPoints} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;