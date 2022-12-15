import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';

//css
import './Login.scss'

// image
import leaf2 from '../../../assets/img/leaf2.png'
import leaf3 from '../../../assets/img/leaf3.png'

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link className='login' onClick={handleShow}>Login</Nav.Link>

      <Modal show={show} onHide={handleClose} className='modal-login' >
        <Modal.Body className='form-login'>
          <h1 className='title-login'>Login</h1>
          <img src={leaf2} alt="" className='leaf2' />
          <img src={leaf3} alt="" className='leaf3'/>
          <Form>
            <Form.Group className="form-group" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"/>
            </Form.Group>
            <Form.Group className="form-group" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"/>
            </Form.Group>
            <Button variant="primary" type="submit" className='button-submit'>Submit</Button>
            <p>Don't have an account?<a href='/register'> Click here</a></p>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login