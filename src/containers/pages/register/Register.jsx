import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//css
import './Register.scss'

// image
import leaf2 from '../../../assets/img/leaf2.png'
import leaf3 from '../../../assets/img/leaf3.png'

const Register = () => {
  return (
    <>
      <h1 className='title'>Register</h1>
      <img src={leaf2} alt="" className='leaf2' />
      <img src={leaf3} alt="" className='leaf3'/>
      <Form className='form'>
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
        <Form.Group className="form-group" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Button variant="primary" type="submit" className='button-submit'>Submit</Button>
      </Form>
    </>
  );
}

export default Register;