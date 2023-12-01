import { Table} from 'react-bootstrap';
import './App.css';
import React from 'react';


function App(){ 
  
  const students =[
    {name:"Neeraj",email:"neeraj@test.com",address:[
      {HouseNo:"21",city:"Dehradun",country:"India"},
      {HouseNo:"31",city:"Delhi",country:"India"},
      {HouseNo:"43",city:"Gurgaon",country:"India"},
      {HouseNo:"54",city:"Agra",country:"India"},
    ]},
    {name:"Ranjeet",email:"ranjeet@test.com",address:[
      {HouseNo:"21",city:"Dehradun",country:"India"},
      {HouseNo:"31",city:"Delhi",country:"India"},
      {HouseNo:"43",city:"Gurgaon",country:"India"},
      {HouseNo:"54",city:"Agra",country:"India"},
    ]},
    {name:"Rohit",email:"rohit@test.com",address:[
      {HouseNo:"21",city:"Dehradun",country:"India"},
      {HouseNo:"31",city:"Delhi",country:"India"},
      {HouseNo:"43",city:"Gurgaon",country:"India"},
      {HouseNo:"54",city:"Agra",country:"India"},
    ]},
    {name:"Shivham",email:"shivham@test.com",address:[
      {HouseNo:"21",city:"Dehradun",country:"India"},
      {HouseNo:"31",city:"Delhi",country:"India"},
      {HouseNo:"43",city:"Gurgaon",country:"India"},
      {HouseNo:"54",city:"Agra",country:"India"},
    ]},
 
  ]
 
  return(
    <div className='App'> 
    <h1>This is my Bootstrap file</h1> <br/>
    <Table striped bordered hover size="sm" >
      <tbody>
        <tr>
          <td>S.No</td>
          <td>Name</td>
          <td>Email</td>
          <td>Address</td>
        </tr>
      </tbody>  
      {
        
        students.map((item,i)=>
        
        <tr key ={i+1}>
          <td>{i+1}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>
             <Table striped bordered hover size="sm" >
             <td>House.No</td>
          <td>City</td>
          <td>Country</td>
          
      <tbody>{
            item.address.map((data) =>
            <tr>
              <td>{data.HouseNo}</td>
              <td>{data.city}</td>
              <td>{data.country}</td>
            </tr>
            )
            }</tbody></Table></td>
        </tr>)
      }
    </Table>
 
    </div>   
  )}
export default App;

 
  
