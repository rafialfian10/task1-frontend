import './Navbar.scss'
import icon from '../../assets/img/icon.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../../containers/user_pages/login/Login';
import Register from '../../containers/user_pages/register/Register';


const Navbars = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className='background-navbar container-fluid'>
        <Container>
          <Navbar.Brand href="/"><img src={icon} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto sub-navbar">
                  <Login/>
                  <Register/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;