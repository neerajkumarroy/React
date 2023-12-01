src/App.js
____________________________________________________________________________________________________________________


import './App.css';
import React from 'react';
import User1 from './User1';



function App(){ 
  function parentalert(data)
  {
    alert(data)
  }
   
  return(
    <div className='App'> 
    
   
    < User1 alert={parentalert}/>
    </div>
      
  )}
export default App;
___________________________________________________________________________________________________________________
src/User1
___________________________________________________________________________________________________________________
 
function User1(props)
{
    const data ="Ranjeet";
    return(
        
        <>
            <h1>Company Name: Ftechiz</h1>
            <button onClick={()=>{props.alert(data)}}>Click Me</button>
        </>
    )
}

export default User1;
