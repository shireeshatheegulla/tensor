import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <center>
      <form>
        <lable>Name : </lable>
        <input type="text" autoComplete='off' name="name"></input><br></br>
        <lable>Email : </lable>
        <input type="text" autoComplete='off' name="email"></input><br></br>
        <lable>Gender : </lable>
        <input type="text"  autoComplete='off' name="gender"></input><br></br>
        <button>SUBMIT</button>
      </form>
      </center>
      
    </div>
  );
}

export default App;
