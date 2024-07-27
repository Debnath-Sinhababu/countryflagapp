import React from 'react';
import { useState,useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
 const [countries,setcountries]=useState([])
  
 async function getcountry(){
  try {
    let result = await axios.get(`https://restcountries.com/v3.1/all`)
  setcountries(result.data)
  } catch (error) {
    console.error(error)
    setcountries([])
  }
  
 }

 useEffect(()=>{
   getcountry()
 },[])
  return (
    <div className="App">
     <input type="text" name="" id="" onChange={(e)=>{
       if(e.target.value){
       let filteredcountry=countries.filter((obj)=>{
           return obj.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  
       })
       setcountries(filteredcountry)
      } else{
        getcountry()
      }
     }}/>
      <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
        {
          countries.map((obj)=>(
            <div style={{width:'300px', margin:30, height:'300px'}} className='countryCard'>
            <img src={obj.flags.png} alt={obj.name.common}/>
            <p>{obj.name.common}</p>
            </div>
          ))
        }
    
      </div>
    </div>
  );
}

export default App;
