import { useState } from "react";


function Signup() {
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
      <center>
        <h1>Signup form </h1>
        <label >Enter  name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label><br></br><br></br>
      <label >Enter password:
        <input        
          type="password" 
          name="age" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </label><br></br><br></br>
        <label>confirm password :
        <input 
          type="password" 
          name="age" 
          value={inputs.p1 || ""} 
          onChange={handleChange}
        />
        </label><br></br><br></br>
        <input type="submit" /></center>
    </form>
  )
}


export default Signup




