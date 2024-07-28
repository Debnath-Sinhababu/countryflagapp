import React from 'react';
import { useState,useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {

  const [inputval, setinputval]=useState('')
  const [defination, setdefination]=useState('')

 let dictionary= [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]

  function getindictionary(){
  let filteredval=  dictionary.filter((obj)=>{
     
    return obj.word.toLowerCase()==inputval.toLowerCase()
         
    })
    if(filteredval.length){
      setdefination(filteredval[0].meaning)
    } else{
      setdefination('Word not found in the dictionary.')
    }
  }
  
  
  return (
    <div className="App">
    <h2>Dictionary App</h2>
    <div>
    <input type="text" value={inputval} onChange={(e)=>setinputval(e.target.value)}/>
    <button onClick={getindictionary}>Search</button>
    </div>
    <h4>Definition:</h4>
    {defination && <p>{defination}</p>}
    </div>
  );
}

export default App;
