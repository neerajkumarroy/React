import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import User from './User';
import { render } from '@testing-library/react';

class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      show:true
    }
  }
  
  render()
  {
    return(
      <div className='App'> 
      {
        this.state.show? <User />:<h1>Client Not Found</h1>
      }

     
           <button onClick={()=>this.setState({show:!this.state.show})}>Toggle</button>


      </div>
     
  )
}

}



export default App;

__________________________________________________________________________________________________________
User.js
__________________________________________________________________________________________________________

import React from "react";

class User extends React.Component{

    componentWillUnmount()
    {
        alert("Cumponent Will UnMount Call")
    }
    render()
    {
        
        return(
            <div>
                <h1>Component Will UnMount</h1>
                
            </div>
        )
    }
}

export default User;