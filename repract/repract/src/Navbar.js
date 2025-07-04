import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '20px' }}>Password Check</Link>
      <Link to="/transform" style={{ marginRight: '20px' }}>Text Transform</Link>
      <Link to="/profile" style={{ marginRight: '20px' }}>Profile</Link>
      <Link to="/interest" style={{ marginRight: '20px' }}>Interest</Link>
      <Link to="/setting">Setting</Link>
      <Link to="/traffic" style={{ marginRight: '20px' }}>Traffic Light</Link>

    </nav>
  );
};

export default Navbar;
