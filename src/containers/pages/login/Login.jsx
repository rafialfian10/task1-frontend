import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//css
import './Login.scss'

// image
import leaf2 from '../../../assets/img/leaf2.png'
import leaf3 from '../../../assets/img/leaf3.png'

const Login = () => {
  return (
    <>
      <h1 className='title'>Login</h1>
      <img src={leaf2} alt="" className='leaf2' />
      <img src={leaf3} alt="" className='leaf3'/>
      <Form className='form'>
        <Form.Group className="form-group" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>
        <Form.Group className="form-group" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"/>
        </Form.Group>
        <Button variant="primary" type="submit" className='button-submit'>Submit</Button>
        <p>Don't have an account?<a href="/register"> Click here</a></p>
      </Form>
    </>
  );
}

export default Login ;