import React from 'react';
import { useState,useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {

  const [flaglist,setflaglist]=useState([])

   async function getclountryflag(){
     try {
      const response = await axios.get('https://xcountries-backend.azurewebsites.net/all')
      setflaglist(response.data)
     } catch (error) {
      console.error(`Error fetching data:${error}`)
      setflaglist([])
     }
     
    }
    

  useEffect(()=>{
   getclountryflag(flaglist)
  },[])

  console.log(flaglist)
  return (
    <div className="App">
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center', alignItems:'center'}}>
      {
        flaglist?.map((obj)=>{
          return(
            <div style={{width:'300px',margin:'30px'}}>
             <img src={obj.flag} alt={obj.name} style={{objectFit:'contain'}}/>
             <p>{obj.name}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
