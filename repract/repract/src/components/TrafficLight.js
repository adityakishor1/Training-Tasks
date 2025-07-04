import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const [currentColor, setCurrentColor] = useState(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let timer;

    if (start) {
      const durations = {
        red: 10000,
        green: 15000,
        yellow: 5000
      };

      const sequence = ['red', 'green', 'yellow'];
      let index = 0;

      const runCycle = () => {
        setCurrentColor(sequence[index]);
        timer = setTimeout(() => {
          index = (index + 1) % sequence.length;
          runCycle();
        }, durations[sequence[index]]);
      };

      runCycle();
    }

    return () => clearTimeout(timer);
  }, [start]);

  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h2>React Traffic Light 🚦</h2>

      <div style={{
        width: '100px',
        height: '300px',
        backgroundColor: '#222',
        borderRadius: '20px',
        margin: 'auto',
        padding: '20px',
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          margin: '20px auto',
          backgroundColor: currentColor === 'red' ? 'red' : '#555'
        }}></div>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          margin: '20px auto',
          backgroundColor: currentColor === 'yellow' ? 'yellow' : '#555'
        }}></div>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          margin: '20px auto',
          backgroundColor: currentColor === 'green' ? 'green' : '#555'
        }}></div>
      </div>

      <button
        onClick={() => setStart(true)}
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          fontSize: '16px'
        }}
        disabled={start}
      >
        Start Cycle
      </button>
    </div>
  );
};

export default TrafficLight;
