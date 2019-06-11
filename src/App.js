import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="digits">
        <span>00</span>
        <span>:</span>
        <span>30</span>
        <span>:</span>
        <span>00</span>
      </div>

      <div className="description">
        <span id="hour">Hour</span>
        <span id="minute">Minute</span>
        <span id="second">Second</span>
      </div>
      
    </div>
  );
}

export default App;
