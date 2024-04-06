import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from './Index';

function App() {
  return (
    <Router>
      <div>
        <Link to="/home">Home</Link>
        <Routes>
          <Route path="/home/:id" element={<Index />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
