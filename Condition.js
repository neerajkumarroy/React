import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './User';

function App() {

  return (
    <div className="App">
      <User></User>

    </div>

  )
}
export default App;

________________________________________________________________________________________________________________________________________________________
User.js
______________________________________________________________________________________________________________________________________________________

import React, { useState } from "react";

function User() {
  const [loggedIn, setLoggedIn] = useState(2);

  return (
    <div>
      {loggedIn === 1 ? 
        <h1>This is the First Page</h1>

       : loggedIn === 2 ? 
        <h1>This is the Second Page</h1>
       
      : 
        <h1>This is the Third Page</h1>
      }
    </div>
  );
}

export default User;
