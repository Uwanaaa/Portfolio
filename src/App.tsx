import './App.css';
// import { Analytics } from "@vercel/analytics/next"

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

 

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    {/* <Analytics /> */}
    
  </Router>
);

export default App;