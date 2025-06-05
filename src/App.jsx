import React from 'react';
import useWindowWidth from './useWindowWidth';

function App() {
  const width = useWindowWidth();

  return (
    <div 
        style={{
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Arial'
        }}>
      <h1 style={{ textAlign: 'center' }}>useWindowWidth</h1>
      <p style={{ textAlign: 'center' }}>
        Current window width: <strong>{width}px</strong>
      </p>
    </div>
  );
}

export default App;