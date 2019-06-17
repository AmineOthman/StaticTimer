import React from 'react';
import Time from './Time';
import './App.css';






function App() {
  return (
    <div className="Time">
      <span className="Timer"><Time/></span><br/>
      <span className="Hour">Hours</span>
      <span className="Min">Minutes</span>
      <span className="Sec">Seconds</span>
      
      
    </div>
  );
}



export default App;
