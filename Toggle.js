import logo from './logo.svg';
import './App.css';
import React, {useState}from 'react';
function App(){
  const [status,setsetStatus]=React.useState(true)

  return(
    <div className="App">
      {
        status?<h1>Hello This is Neeraj</h1>:null
      }
      
      {/* <button onClick={()=>setsetStatus(false)}>Hide</button>
      <button onClick={()=>setsetStatus(true)}>Show</button> */}
      <button onClick={()=>setsetStatus(!status)}>Toggle</button> 
          
       
            
      </div>

  )
}

      

export default App;
