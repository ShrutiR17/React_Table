import React, { useState } from'react'
import './App.css';

function App() {
const[inputarr,SetInputarr]=useState([])
const[inputdata,SetInputdata]=useState({
  name:"",
  rollNo:""
})

  function changehandle(e){
    SetInputdata({...inputdata,[e.target.name]:e.target.value})
    
  }

  let {name,rollNo}=inputdata;
  function changehandle(){
    SetInputarr([...inputarr,{name,rollNo}])
    
    console.log(inputdata,"input data what we enter")
    SetInputdata({name:"",rollNo:""})
  }
  function changehandle2(){
    console.log("Object stored in Array ",inputarr)
  }
  return (
    <div className="App">
      <input type="text"autoComplete='off' name='name' value={inputdata.name} onchange={changehandle} placeholder="Enter Name" /><br/><br/>
      <input type="text"autoComplete='off' name='name' value={inputdata.rollNo} onchange={changehandle} placeholder="Enter RollNo" /><br/><br/>
      
      <button onClick={changehandle}> Add It</button><br/>
      <button onClick={changehandle2}>Check Array in console</button><br/>
      <table border={1} width="30%" cellPadding={10}>
        <tbody>
        <tr>
          <th>Name</th><br/>
          <th>RollNo</th><br/>
        </tr>

        {
          inputarr.map(
            (info,ind)=>{
              return(
                <tr key={ind}>
                  <td>{info.name}</td><br/>
                  <td>{info.rollNo}</td>
                </tr>
              )
              
              }
            
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
