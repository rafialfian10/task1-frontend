import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';

//css
import './Register.scss'

// image
import leaf2 from '../../../assets/img/leaf2.png'
import leaf3 from '../../../assets/img/leaf3.png'

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link className='register' onClick={handleShow}>Register</Nav.Link>

      <Modal show={show} onHide={handleClose} className='modal-register' >
        <Modal.Body  className='modal-body-register'>
          <h1 className='title-register'>Register</h1>
          <img src={leaf2} alt="" className='leaf2' />
          <img src={leaf3} alt="" className='leaf3'/>
          <Form >
            <Form.Group className="form-group" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="form-group" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"/>
            </Form.Group>
            <Form.Group className="form-group" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"/>
            </Form.Group>
            <Form.Group className="form-group" controlId="formBasicEmail">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="form-group" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Button variant="primary" type="submit" className='button-submit'>Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register