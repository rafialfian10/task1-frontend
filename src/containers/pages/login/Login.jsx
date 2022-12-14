import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//css
import './Login.scss'

const Login = () => {
  return (
    <>
      <h1 className='text-center m-5 fw-bold'>Login</h1>
      <Form className='m-auto' style={{width:'60vw'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"/>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default Login ;