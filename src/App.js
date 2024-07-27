import React from 'react';
import { useState,useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
 
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('')
  const [loginsuccess,isloginsuccess]=useState(null)
  function login(e){
     e.preventDefault()
     if(username=='user' && password=='password'){
      isloginsuccess(true)
     } else{
      isloginsuccess(false)
     }
  }
  
  return (
    <div className="App">
      
      <h1>Login Page</h1>
      {loginsuccess==false && <p>Invalid username or password</p>}
      {
        loginsuccess?<p>Welcome, user!</p>:
      
        <form action="/submit-login" method="post" onSubmit={(e)=>login(e)}>
          <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder='username' required value={username} onChange={(e)=>setusername(e.target.value)}/>
            </div>
            <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder='password' required  onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
        </form>
}
    </div>
  );
}

export default App;
