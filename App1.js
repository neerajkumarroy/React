import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[data,setData]=useState(0)
  function updateData()
  {
    setData(data+1)

  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Update</button>
    
    </div>
  );
}

export default App;
