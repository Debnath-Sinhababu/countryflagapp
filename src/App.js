import { useState } from 'react';
import './App.css'

function App() {
  const [inputVal, setInputVal] = useState('');
  const [result, setResult] = useState('');

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const searchHandle = () => {
    if (inputVal.trim() === '') {
      setResult('Word not found in the dictionary.');
      return;
    }

    const foundData = dictionary.find(ele => ele.word.toLowerCase() === inputVal.toLowerCase());
    setResult(foundData ? foundData.meaning : 'Word not found in the dictionary.')
   
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div>
        <input
          type='text'
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder='Search for a word ...'
        />
        <button type='submit' onClick={searchHandle}>Search</button>
      </div>
      <p><strong>Definition: </strong></p>
      <p>
        {result}
      </p>
    </div>
  );
}

export default App
