import React from 'react';

const Interest = () => {
  return (
    <div>
      <h2>Interest</h2>
      <label>Select your interest:</label><br />
      <select>
        <option>Sports</option>
        <option>Music</option>
        <option>Tech</option>
      </select><br /><br />
      <label><input type="checkbox" /> Subscribe</label>
    </div>
  );
};

export default Interest;
