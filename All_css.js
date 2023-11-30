src/App.js
_______________________________________________________________________________________________________________________
import './App.css';
import './Style.css';
import Style from './custom.module.css';


function App(){  
  return(
    <div className='App'>  

    <h1 className='primary'>This is my first react file</h1>
    <h1 style={{backgroundColor:'skyblue', color:"black"}}>This is my secound react file</h1>
    <h1 className={Style.success}>This is my Third react file</h1>

    </div>   
  )}
export default App;

______________________________________________________________________________________________________________________
src/Style.css
______________________________________________________________________________________________________________________
.primary{

  background: #000;
  color: red;

}

_______________________________________________________________________________________________________________________
 src/custom.module.css
 ______________________________________________________________________________________________________________________
 .success{
  background-color: red;
  color: black;
}
