import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor()
  {
    super();
    this.state={
      data:1
    }
  }
  Fruits()
  {
    this.setState({data:this.state.data+1})
  }
  render()
  {
    return (
      <div className="App">
  <h1>{this.state.data}</h1> 
  <button onClick={()=>this.Fruits()}>Click Me</button>   
      </div>
    );
  }
}


{

}



export default App;
