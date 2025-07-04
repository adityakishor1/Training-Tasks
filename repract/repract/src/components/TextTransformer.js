import React, { useState } from 'react';

const TextTransformer = () => {
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');

  const toUppercase = () => setOutput(text.toUpperCase());
  const toLowercase = () => setOutput(text.toLowerCase());
  const toReverse = () => setOutput(text.split('').reverse().join(''));
  const toCapitalize = () => {
    const result = text
      .toLowerCase()
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    setOutput(result);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Text Transformer</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
        style={{ padding: '10px', width: '300px', fontSize: '16px' }}
      />
      <div style={{ marginTop: '20px' }}>
        <button onClick={toUppercase}>Uppercase</button>{' '}
        <button onClick={toLowercase}>Lowercase</button>{' '}
        <button onClick={toReverse}>Reverse</button>{' '}
        <button onClick={toCapitalize}>Capitalize</button>
      </div>
      <p style={{ marginTop: '30px', fontSize: '18px' }}>
        Output: <strong>{output}</strong>
      </p>
    </div>
  );
};

export default TextTransformer;
