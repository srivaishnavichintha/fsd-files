import { useState } from "react";


function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    alert('your form submitted successfully')
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <center><h1>login form</h1>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label><br></br><br></br>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label><br></br><br></br>
        <input type="submit" /></center>
    </form>
  )
}


export default Login




// // import Home from './components/About.js';
// // import About from './components/Contact.js';
// // import Contact from './components/Homepage.js';
// import React from 'react';
// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import Login from './components/Login.js'
// // import logo from './logo.svg'
// import './App.css';

// function App() {
//   return (
//     <div>
      
//             <Login/>
//    </div>
//   );
// }

// export default App;
// {/* <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
  
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>start

  
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div> */}
   