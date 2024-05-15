import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom'; 
import { Link  } from 'react-router-dom';
import Button from 'react-bootstrap/Button' 
import 'bootstrap/dist/css/bootstrap.min.css';  
import './components/Stylesheet.css'
function App(){
  return(
   
   
     <BrowserRouter>
      <nav>
       
      <center>   <Link className='button'    to="/Login"><Button variant="info">Login</Button>{''}</Link>
            <Link     className='button' to="/Signup"><Button variant="info">signup</Button>{''}</Link></center> 
        
      </nav>
          <Routes>
               <Route path='/Login' element={<Login/>}></Route>
                <Route path='/Signup' element={<Signup/>}></Route>
          </Routes>
     </BrowserRouter> 
    
  ) 
}
export default App;