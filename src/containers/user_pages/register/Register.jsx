// import React, { useState } from 'react';
// import {useNavigate} from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Nav from 'react-bootstrap/Nav';

// //css
// import './Register.scss'

// // image
// import leaf2 from '../../../assets/img/leaf2.png'
// import leaf3 from '../../../assets/img/leaf3.png'
// // import Login from '../login/Login';

// function Register() {
//   const [showReg, setShowReg] = useState(false);

//   const handleCloseReg = () => setShowReg(false);
//   const handleShowReg = () => setShowReg(true);

//   const navigate = useNavigate()

//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     address: "",
//   })

//   const HandleChangeText = (event) => {
//     setData({...data, [event.target.id]: event.target.value})
//   }

//   const HandleRegisterSubmit = (e) => {
//     e.preventDefault()
//     localStorage.setItem("user", JSON.stringify(data))
//     navigate("/login")
//   }

//   return (
//     <>
//     {/* <Login funcReg={setShowReg(true)}/> */}
//       <Nav.Link className='register' onClick={handleShowReg}>Register</Nav.Link>

//       <Modal show={showReg} onHide={handleCloseReg} className='modal-register' >
//         <Modal.Body  className='modal-body-register'>
//           <h1 className='title-register'>Register</h1>
//           <img src={leaf2} alt="" className='leaf2' />
//           <img src={leaf3} alt="" className='leaf3'/>
//           <Form onSubmit={HandleRegisterSubmit}>
//             <Form.Group className="form-group" controlId="formBasicEmail">
//               <Form.Label>Full Name</Form.Label>
//               <Form.Control type="text" name="name" value={data.name} onChange={HandleChangeText}/>
//             </Form.Group>
//             <Form.Group className="form-group" controlId="formBasicEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" name="email" value={data.email} onChange={HandleChangeText}/>
//             </Form.Group>
//             <Form.Group className="form-group" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" name="password" value={data.password} onChange={HandleChangeText} />
//             </Form.Group>
//             <Form.Group className="form-group" controlId="formBasicEmail">
//               <Form.Label>Phone</Form.Label>
//               <Form.Control type="text" name="phone" value={data.phone} onChange={HandleChangeText} />
//             </Form.Group>
//             <Form.Group className="form-group" controlId="formBasicEmail">
//               <Form.Label>Address</Form.Label>
//               <Form.Control type="text" name="address" value={data.address} onChange={HandleChangeText} />
//             </Form.Group>
//             <Button variant="primary" type="submit" className='button-submit'>Submit</Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default Register