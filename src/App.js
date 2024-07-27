import React from 'react';
import { useState,useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
 
 const [country, setcountry]=useState([])
 const [state, setstate]=useState([])
 const [city, setcity]=useState([])
 const [selectedcountry, setselectedcountry]=useState(null)
 const [selectedstate, setselectedstate]=useState(null)
 const [selectedcity, setselectedcity]=useState(null)
 
 async function getcountry(){
  try {
    let result=await axios.get('https://crio-location-selector.onrender.com/countries')
    setcountry(result.data)
  } catch (error) {
    console.log(error)
    setcountry([])
  }
   
   
 }

async function getstates(){
  let result=await axios.get(`https://crio-location-selector.onrender.com/country=${selectedcountry}/states`)
  setstate(result.data)
}

async function getcity(){
  try {
    let result=await axios.get(`https://crio-location-selector.onrender.com/country=${selectedcountry}/state=${selectedstate}/cities`)
    setcity(result.data)
  } catch (error) {
    console.log(error)

  }
  
 
}

 useEffect(()=>{
  getcountry()
   
 },[])

 useEffect(()=>{
  if(selectedcountry){
  getstates()
  }
 },[selectedcountry])

 useEffect(()=>{
  if(selectedstate){
  getcity()
  }
 },[selectedstate])
  
  return (
    <div className="App">
      <h2>Select Location</h2>
      <div>
      <select id="dropdown" name="options" required onChange={(e)=>{
           if(e.target.value!='select country'){
            setselectedcountry(e.target.value)
           }
      }}>
                <option value="select country">Select Country</option>
                {
                  country.map((val)=>{
                    return(
                      <option value={val}>{val}</option>
                    )
                  })
                }
            </select>
            <select id="dropdown" name="options" required disabled={selectedcountry?false:true} onChange={(e)=>{
           if(e.target.value){
            setselectedstate(e.target.value)
           }
      }}>
                <option value="">Select State</option>
                {
                  state.map((val)=>{
                    return(
                      <option value={val}>{val}</option>
                    )
                  })
                }   
            </select>

            <select id="dropdown" name="options" required disabled={selectedstate?false:true} onChange={(e)=>{
           if(e.target.value){
            setselectedcity(e.target.value)

           }
           
           }}>
                <option value="">Select City</option>   
                {
                  city.map((val)=>{
                    return(
                      <option value={val}>{val}</option>
                    )
                  })
                }   
            </select>
          {
            selectedcity && <p>You selected {selectedcity}, {selectedstate}, {selectedcountry}</p>
          }
            </div>
    </div>
  );
}

export default App;
