// css
import "./Navbar.scss";
import "./Login.scss";
import "./Register.scss";

// image
import icon from "../../assets/img/icon.png";
import leaf2 from "../../assets/img/leaf2.png";
import leaf3 from "../../assets/img/leaf3.png";
import photoProfile from "../../assets/img/photo-profile.png";
import profile from "../../assets/img/profile-navbar.png";
import bill from "../../assets/img/bill.png";
import logout from "../../assets/img/logout.png";
import trip from "../../assets/img/trip.png";

// components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

// api
import { API } from "../../config/api";

const Navbars = () => {
  // navigate berfungsi untuk redirect kehalaman lain
  const navigate = useNavigate();

  // Login modal login
  const [showReg, setShowReg] = useState(false);

  const handleCloseReg = () => setShowReg(false);
  const handleShowReg = () => setShowReg(true);
  // End login modal login

  // modal register
  const [showLog, setShowLog] = useState(false);

  const handleCloseLog = () => setShowLog(false);
  const handleShowLog = () => setShowLog(true);
  // End modal register
  //---------------------------------------------------------------

  // function handle register
  const handleRegister = (e) => {
    e.preventDefault();
    setShowLog(false);
    setShowReg(true);
  };
  // end function handle register
  //-------------------------------------------------------------

  // Process register
  // const [message, setMessage] = useState(null);
  const [formReg, setFormReg] = useState({
    name: "",
    email: "",
    password: "",
    gender: "male",
    phone: "",
    address: "",
  });

  const HandleChangeRegister = (event) => {
    setFormReg({ ...formReg, [event.target.name]: event.target.value });
  };

  // function register submit
  const HandleRegisterSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      // konfigurasi Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(formReg);

      // masukkan data user kedalam database
      const response = await API.post("/register", body, config);

      // Notification
      if (response.data.code === 200) {
        alert("Register Successfully");
        navigate("/");
        setShowReg(false);
        setShowLog(true);

        // kosongkan form
        setFormReg({
          name: "",
          email: "",
          password: "",
          gender: "male",
          phone: "",
          address: "",
        });
      } else {
        alert("Register failed slur")
      }
    } catch (err) {
      alert("Register failed")
      console.log(err);
    }
  });
  // end function register submit
  //---------------------------------------------------------------------

  // process login
  const [formlogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const [state, dispatch] = useContext(UserContext)

  // function login
  const HandleChangeLogin = (event) => {
    setFormLogin({ ...formlogin, [event.target.name]: event.target.value });
  };

  // function login submit
  const HandleLoginSubmit = useMutation(async (e) => {
    e.preventDefault();
    try {
      // konfigurasi Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(formlogin);

      const response = await API.post("/login", body, config)

      if(response.data.code === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        })
      }
      setShowLog(false)
      alert("Login successfuly")
      navigate("/")

    } catch(err) {
      alert("Login Failed")
      console.log(err)
    }
    
  });
  // end function login submit

  // process logout
  const HandleLogout = (e) => {
    e.preventDefault();

    dispatch({
      type: "LOGOUT",
    })

    alert("Logout successfully");
    navigate("/");
  };
  // end process logout

  //get local storage
  const localStorageData = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar bg="light" expand="lg" className="background-navbar container-fluid">
        <Container>
          <Navbar.Brand href="/">
            <img src={icon} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto sub-navbar">
              {/* profile navbar */}
              {/* jika isLogin = true maka tampilkan dropdown user, jika false tampilkan btn login & register*/}
              {localStorage.getItem("isLogin") ? (
                <>
                  {/* jika isAdmin = false maka tampilkan dropdown user, jika true maka tampilkan dropdown admin*/}
                  {!localStorage.getItem("isAdmin") ? (
                    <Navbar.Brand>
                      <img src={photoProfile} alt="" className="photo-profile"/>
                      {/* looping local storage lalu kondisikan*/}
                      {localStorageData.map((data, i) => {
                        // jika id.userLogin == id.user tampilkan dropdown
                        if (parseInt(localStorage.getItem("userLogin")) === data.id) {
                          return (
                            <Dropdown as={ButtonGroup} className="dropdown" key={i}>
                              {" "}
                              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="toggle-navbar"/>
                              <Dropdown.Menu className="menu-dropdown">
                                <Dropdown.Item onClick={() => navigate(`/profile/${data.id}`)}>
                                  <img src={profile} alt="" />
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => navigate(`/payment/${data.id}`)}>
                                  <img src={bill} alt="" />
                                </Dropdown.Item>
                                <Dropdown.Item onClick={HandleLogout}>
                                  <img src={logout} alt="" />
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          );
                        }
                      })}
                    </Navbar.Brand>
                  ) : (
                    <Navbar.Brand>
                      <img src={photoProfile} alt=""  className="photo-profile"/>
                      <Dropdown as={ButtonGroup} className="dropdown">
                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="toggle-navbar"/>
                        <Dropdown.Menu className="menu-dropdown">
                          <Dropdown.Item onClick={() => navigate(`/incom_trip`)}>
                            <img src={trip} alt="" />
                          </Dropdown.Item>
                          <Dropdown.Item onClick={HandleLogout}>
                            <img src={logout} alt="" />
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Navbar.Brand>
                    // end profile navbar
                  )}
                </>
              ) : (
                <>
                  {/* modal register */}
                  <Nav.Link className="register" onClick={handleShowReg}>{" "} Register </Nav.Link>
                  <Modal show={showReg} onHide={handleCloseReg} className="modal-register" size="lg">
                    <Modal.Body className="modal-body-register">
                      <h1 className="title-register">Register</h1>
                      <img src={leaf2} alt="" className="leaf2" />
                      <img src={leaf3} alt="" className="leaf3" />
                      <Form onSubmit={HandleRegisterSubmit.mutate}>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control type="text" name="name" onChange={HandleChangeRegister}/>
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" name="email" onChange={HandleChangeRegister}/>
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name="password" onChange={HandleChangeRegister}/>
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formBasicPassword">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control type="text" name="phone" onChange={HandleChangeRegister}/>
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                          <Form.Label>Address</Form.Label>
                          <Form.Control type="text" name="address" onChange={HandleChangeRegister}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="button-submit">Submit</Button>
                      </Form>
                    </Modal.Body>
                  </Modal>
                  {/* end modal register */}

                  {/* modal login */}
                  <Nav.Link className="login" onClick={handleShowLog}>Login</Nav.Link>
                  <Modal show={showLog} onHide={handleCloseLog} className="modal-login" size="lg">
                    <Modal.Body className="form-login">
                      <h1 className="title-login">Login</h1>
                      <img src={leaf2} alt="" className="leaf2" />
                      <img src={leaf3} alt="" className="leaf3" />
                      <Form>
                        <Form.Group className="form-group" controlId="formBasicEmail"> 
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" name="email" onChange={HandleChangeLogin}/>
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name="password" onChange={HandleChangeLogin}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="button-submit" onClick={(e) => HandleLoginSubmit.mutate(e)}>Submit</Button>
                        <p>Don't have an account?<button className="btn-show-register" onClick={handleRegister}>Click here</button></p>
                      </Form>
                    </Modal.Body>
                  </Modal>
                  {/* end modal login */}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
