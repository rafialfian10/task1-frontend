import './Navbar.scss'
import icon from '../../assets/img/icon.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className='background-navbar'>
        <Container>
          <Navbar.Brand href="/"><img src={icon} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto sub-navbar">
                  <Nav.Link href="/login" className='login'>Login</Nav.Link>
                  <Nav.Link href="/register" className='register'>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;