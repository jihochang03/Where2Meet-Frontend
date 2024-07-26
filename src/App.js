// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './routes/MainPage';
import ResultPage from './routes/ResultPage';
import './App.css';

const App = () => {
  const [results, setResults] = useState(() => {
    const savedResults = localStorage.getItem('results');
    return savedResults ? JSON.parse(savedResults) : [];
  });
  const [startPoints, setStartPoints] = useState(() => {
    const savedStartPoints = localStorage.getItem('startPoints');
    return savedStartPoints ? JSON.parse(savedStartPoints) : [];
  });
  const [paths, setPaths] = useState(() => {
    const savedPaths = localStorage.getItem('paths');
    return savedPaths ? JSON.parse(savedPaths) : [];
  })
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : [];
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage setResults={setResults} setComments={setComments} setStartPoints={setStartPoints} setPaths={setPaths} />} />
        <Route path="/result" element={<ResultPage results={results} comments={comments} startPoints={startPoints} paths={paths} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;