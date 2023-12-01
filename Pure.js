import './App.css';
import React from 'react';

class App extends React.PureComponent{ 
  constructor()
  {
    super();
    this.state={
      count:1
    }
  }

  render()

  {
    console.log("rerandering")
    return(
      <div className='App'> 
      <h1> Pure Component:{this.state.count}</h1>
      <button onClick={()=>this.setState({count:1})}>Click Me</button>
         
      </div>
        
    )
  }
 }
export default App;

 
  
