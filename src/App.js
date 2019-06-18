import React from 'react';
import Timer from './Time';
import './App.css';






function App() {
  return (
    <div className="Time">
      <span className="Timer"><Timer/></span><br/>
      <div className="desc">

       <span className="Hour">HH/</span>
       <span className="Min">MM/</span>
       <span className="Sec">SS</span>

      </div>

      
      
    </div>
  );
}



export default App;
