import React from 'react';
import { useState,useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [count,setcount]=useState(0)
  
  return (
    <div className="App">
      <h3>Counter App</h3> 
      <p>Count: {count}</p> 
      <div style={{display:'flex',justifyContent:'center'}}>
        <button onClick={()=>{
          setcount((prev)=>prev+1)
        }}>Increment</button>
        <button onClick={()=>{
          setcount((prev)=>prev-1)
        }}>Decrement</button>
        </div>   
    </div>
  );
}

export default App;
