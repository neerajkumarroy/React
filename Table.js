import { Table} from 'react-bootstrap';
import './App.css';
import React from 'react';


function App(){ 
  
  const students =[
    {name:"neeraj",email:"neeraj@test.com",Phoneno:"111"},
    {name:"neeraj",email:"neeraj@test.com",Phoneno:"111"},
    {name:"neeraj",email:"neeraj@test.com",Phoneno:"111"},
 
  ]
 
  return(
    <div className='App'> 
    <h1>this is my bootstrap file</h1> <br/>
    <h1>Array elements handle in react.js with the help of map function</h1>
    <Table striped bordered hover size="sm">
      <tbody>
      <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Phone.No</td>
      </tr>
    
   {

    students.map ((data,i)=>
    data.Phoneno ==='111'?
      <tr key={i}>
        <td>{data.name}</td><br/>
        <td>{data.email}</td><br/>
        <td>{data.Phoneno}</td><br/>
      </tr>:null
    )
   }
    </tbody>
    </Table>
    </div>   
  )}
export default App;

 
  
