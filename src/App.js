import React from 'react';
import { useState,useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result,setresult]=useState(null)
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setresult(null)
  };

  const handleEvaluate = () => {
    try {
      if(input=='0/0'){
        setresult('NaN');
        return
      }
      if(!input){
        setresult('Error');
        return
      }
      setresult(eval(input));
    } catch(e) {
      setresult('Error');
    }
  };
  
  return (
    <div className="calculator App">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div style={{margin:20, fontSize: '1.5em'}}>{result && result}</div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
