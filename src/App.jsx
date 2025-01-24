import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ResumeBuilder from './pages/ResumeBuilder';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume-builder/:templateId" element={<ResumeBuilder />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;