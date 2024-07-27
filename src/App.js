import React from 'react';
import { useState,useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
      let interval = null;
      if (isRunning) {
          interval = setInterval(() => {
              setTime(prevTime => prevTime + 1);
          }, 1000);
      } else if (!isRunning && time !== 0) {
          clearInterval(interval);
      }
      return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStartStop = () => {
      setIsRunning(!isRunning);
  };

  const handleReset = () => {
      setIsRunning(false);
      setTime(0);
  };

  const formatTime = (time) => {
      const minutes = String(Math.floor(time / 60));
      const seconds = String(time % 60).padStart(2, '0');
      return `${minutes}:${seconds}`;
  };

 
  return (
    <div className="App">
      <div className="stopwatch">
            <h3>Stopwatch</h3>
            <div className="display">Time: {formatTime(time)}</div>
            <div className="buttons">
                <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    </div>
  );
}

export default App;
