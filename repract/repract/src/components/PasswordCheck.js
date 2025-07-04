import React, { useState } from 'react';

const PasswordCheck = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const checkStrength = (pwd) => {
    const isStrong =
      pwd.length >= 8 &&
      /[A-Z]/.test(pwd) &&
      /[a-z]/.test(pwd) &&
      /[0-9]/.test(pwd) &&
      /[^A-Za-z0-9]/.test(pwd);

    setMessage(isStrong ? "Strong" : "Weak");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          checkStrength(e.target.value);
        }}
        style={{ padding: '10px', fontSize: '16px', width: '250px' }}
      />
      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{message}</p>
    </div>
  );
};

export default PasswordCheck;
