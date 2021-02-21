import React, { useState } from 'react';
import './App.css';
import Greet from './Components/Greet/Greet';

function App() {
  const [familiar,setFamiliar]=useState(false)
  return (
    <div className="App">
     <h3>Current Value: {familiar.toString()} </h3>
     <button onClick={()=>setFamiliar(!familiar)}>Toggle</button>
     <Greet familiar={familiar} />
    </div>
  );
}

export default App;
