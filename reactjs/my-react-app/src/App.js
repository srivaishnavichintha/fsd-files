import Log from './components/Login';
import React from 'react';
import Sign from './components/Signup';
import Home from './components/Home';
import About from './components/About';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import thublogo from './images/GREEN TM.png';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './components/Stylesheet.css'

function App() {
 
  return (
    
  <BrowserRouter>
  
  {/* <nav>
      <center>
      <Link to='/'><Button variant="info">Home</Button>{' '}</Link><br/><br/>
      <Link to='/login'><Button variant="info">Login</Button>{' '}</Link><br/><br/
      <Link to='/signup'><Button variant="info">Signup</Button>{' '}</Link><hr/>
      </center>
  </nav> */}
  <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container>
        <Navbar.Brand href="/"><img src={thublogo} className='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/loginn' className='gap'>portifolio</Nav.Link>
            <Nav.Link href="/signup"className='gap'>code</Nav.Link>
            <Nav.Link href="/About" className='gap'>Trainings</Nav.Link>
            <Nav.Link href='' className='gap'>Logical</Nav.Link>
            <Nav.Link href="/About" className='gap'>Companies</Nav.Link>
            <Nav.Link href=''className='gap'> credits</Nav.Link>
          </Nav>
          <button className='button'>login</button>
          <button className='button'>signup</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>


   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/loginn" element={<Log/>}/>
      <Route path="/signup" element={<Sign/>}/>
      <Route path="/About" element={<About/>}/>
   </Routes>
  </BrowserRouter>
  )
}
export default App;