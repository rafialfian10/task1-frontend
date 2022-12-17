// components
import Modal from 'react-bootstrap/Modal';
import React from 'react';

// css 
import './Popup.scss'

const Popup = ({popup, setPopup}) => {

  return (
    <Modal show={popup} onHide={() => setPopup(false)} size="xs" aria-labelledby="contained-modal-title-vcenter" centered className='modal-popup'>
      <Modal.Body className='body-popup'>
        <p>Your payment will be confirmed within 1 x 24 hours To see orders click <p onClick={() => setPopup(false)} className='popup'>here</p> thank you</p>
      </Modal.Body>
    </Modal>
  );
}

export default Popup