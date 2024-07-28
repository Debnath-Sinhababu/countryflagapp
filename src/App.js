import React from 'react';
import { useState,useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [inputval, setinputval]=useState("")
  const [showweather, setshowweather]=useState([])
  const [loading, setloading]=useState(false)
 async function getweatherreport(){
  setloading(true)
  try {
   
    let response=await axios.get(`http://api.weatherapi.com/v1/current.json?key=7954c4253e51438a9bb104528242807&q=${inputval}&aqi=no`)
    let data=response.data;
    setloading(false)
    let arr=[]
    let tempobj={
      title:'Temperature',
      value:`${data.current.temp_c}°C`
    }
   arr.push(tempobj)
    let humidobj={
      title:'Humidity',
      value:`${data.current.humidity}%`
    }
    arr.push(humidobj)
    let conditionobj={
      title:'Condition',
      value:data.current.condition.text
    }
    arr.push(conditionobj)
    let windspeed={
      title:'Wind Speed',
      value:`${data.current.wind_kph}kph`
    }
   arr.push(windspeed)
   setshowweather(arr)
  } catch (error) {
    console.log(error)
    setshowweather([])
    setloading(false)
    window.alert('Failed to fetch weather data')

  }
   
  }
  return (
    <div className="App">
      <div>
      <input type='text' onChange={(e)=>setinputval(e.target.value)} value={inputval}/>
      <button onClick={getweatherreport}>Search</button>
      </div>
      {
        loading? <p>Loading data...</p>:
      
      <div className='weather-cards' style={{display:'flex', justifyContent:'center'}}>
      {
       showweather.length>0 && showweather.map((obj)=>(
         <div className='weather-card' style={{margin:20}}>
          <h3>{obj.title}</h3>
          <p>{obj.value}</p>
         </div>
       ))
      }
      </div>
}
    </div>
  );
}

export default App;
