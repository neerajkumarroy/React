import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import User from './User';
import { render } from '@testing-library/react';

class App extends React.Component{

  constructor()
  {
    super();
    console.warn("constructror")
    this.state={
      count:0
    }
  }
 
  componentDidUpdate(preProps,preState,anapShort)
  {
    console.warn("componentDidUpdate",preState.count,this.state.count)
    if(preState.count === this.state.count)
    {
      alert("Data Are Same,Please check the previous entered Data")
    }
  }

  render()
  {
    console.warn("render")
    return(
      <div className='App'>
        <h1>Component Did Update{this.state.count}</h1>
        <button onClick={()=>{this.setState({count:1})}}>Update Name</button>
        


      </div>
     
  )
}

}



export default App;