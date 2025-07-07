import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Profile from './pages/profile';
import Interest from './pages/Interest';
import Setting from './pages/Setting';
import PasswordCheck from './components/PasswordCheck';
import TextTransformer from './components/TextTransformer';
import TrafficLight from './components/TrafficLight'; 

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<PasswordCheck />} />
          <Route path="/transform" element={<TextTransformer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/traffic" element={<TrafficLight />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
