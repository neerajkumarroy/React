import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
    const [name, setName] = useState("");
    const [cdn, setCdn] = useState(false);
    const [interest, setInterest] = useState("")

    function getformData(e) {
        console.warn(name,cdn,interest);
        e.preventDefault();
    }


    return (
        <div className="App">
            <form onSubmit={getformData}>
            <h1>Handle Form Data</h1>
            <input type='text' placeholder='Please Enter The Name' onChange={(e) => setName(e.target.value)}></input><br /><br />
            <select onChange={(e) => setInterest(e.target.value)}>
                <option>Select City</option>
                <option>Dehradun</option>
                <option>Haridware</option>
                <option>Delhi</option>
            </select><br /><br />
            <input type='checkbox' onChange={(e) => setCdn(e.target.checked)}></input><span>Accepct Term And Conditions</span><br /><br />
            <button>Submit</button>
            </form>

        </div>

    )
}
export default App;