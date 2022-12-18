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

const Navbars = ({admin}) => {
  // navidate berfungsi untuk redirect kehalaman lain
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
  //-------------------------------------------------------------

  // Process register
  // usestate berfungsi untuk menyimpan data input
  const [dataReg, setDataReg] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "user",
  });

  // function register submit
  const HandleChangeRegister = (event) => {
    setDataReg({ ...dataReg, [event.target.name]: event.target.value });
  };

  const HandleRegisterSubmit = (e) => {
    e.preventDefault();

    let result = [];

    // panggil local storage dengan getItem
    const localStorageData = localStorage.getItem("user");
    // lakukan kondisi jika local storage ada isinya maka parsing data ke json lalu tampung ke result
    if (localStorageData != null) {
      result = JSON.parse(localStorageData);
    }

    // create id unique lalu tampung ke variabel dataUser
    let dataUser = { ...dataReg };
    dataUser.id = new Date().getMilliseconds();

    // push data ke result lalu setItem(set data) ke local storage dengan parsing json ke string lalu navigate
    result.push(dataUser);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
    alert("Register successfully");
    setShowReg(false);
    setShowLog(true);
  };
  // end function register submit
  //---------------------------------------------------------------------

  // process login
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // function login
  const HandleChangeLogin = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  // function login submit
  const HandleLoginSubmit = (e) => {
    e.preventDefault();

    // get data local storage dengan menggunakan getItem
    let localStorageData = localStorage.getItem("user");

    let result = [];

    // jika local strorage ada datanya maka parse data ke json
    if (localStorageData !== null) {
      result = JSON.parse(localStorageData);
    }

    // cek apakah email dan password yang diinputkan sudah sesuai dengan email dan password di local storage
    const checkEmailAndPassword = result.filter((data) => {
      return data.email === login.email && data.password === login.password;
    })[0];

    // jika checkEmailAndPassword true
    if (checkEmailAndPassword) {
      // set item local strorage key isLogin = true dan userLogin = id yang telah dimasukkan kedalam checkEmailAndPassword
      localStorage.setItem("isLogin", true);
      localStorage.setItem("userLogin", checkEmailAndPassword.id);
      checkEmailAndPassword.role === "admin" && localStorage.setItem("isAdmin", true);
      navigate("/");
      alert("Login successfully");
      setShowLog(false);
    } else {
      alert("Email / password incorrect");
    }
  };
  // end function login submit

  // process logout
  const HandleLogout = (e) => {
    e.preventDefault();

    // hapus key di local storage
    localStorage.removeItem("isLogin");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("userLogin");
    navigate("/");
    alert("Logout successfully");
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
              {/* jika isLogin = true maka tampilkan dropdown navbar, jika false tampilkan btn login & register*/}
              {localStorage.getItem("isLogin") ? (
                <>
                  {/* jika isAdmin = false maka tampilkan dropdown user, jika true maka tampilkan dropdown admin*/}
                  {!localStorage.getItem("isAdmin") ? (
                    <Navbar.Brand>
                      <img src={photoProfile} alt="" className="photo-profile"/>
                      {/* looping local storage lalu kondisikan*/}
                      {localStorageData.map((data) => {
                        // jika id.userLogin == id.user tampilkan dropdown 
                        if (parseInt(localStorage.getItem("userLogin")) === data.id){
                          return (
                            <Dropdown as={ButtonGroup} className="dropdown"> <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="toggle-navbar"/>
                              <Dropdown.Menu className="menu-dropdown">
                                <Dropdown.Item onClick={() => navigate(`/profile/${data.id}`)}>
                                  <img src={profile} alt=""/>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => navigate(`/payment/${data.id}`)}>
                                  <img src={bill} alt=""/>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={HandleLogout}>
                                  <img src={logout} alt=""/>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          );
                        }
                      })}
                    </Navbar.Brand>
                  ) : (
                    <Navbar.Brand>
                      <img src={photoProfile} alt="" className="photo-profile"/>
                      <Dropdown as={ButtonGroup} className="dropdown">
                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="toggle-navbar"/>
                        <Dropdown.Menu className="menu-dropdown">
                          <Dropdown.Item onClick={() => navigate(`/incom_trip`)}>
                            <img src={trip} alt=""/>
                          </Dropdown.Item>
                          <Dropdown.Item onClick={HandleLogout}>
                            <img src={logout} alt=""/>
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
                  <Nav.Link className="register" onClick={handleShowReg}> Register</Nav.Link>
                  <Modal show={showReg} onHide={handleCloseReg} className="modal-register" size="lg">
                    <Modal.Body className="modal-body-register">
                      <h1 className="title-register">Register</h1>
                      <img src={leaf2} alt="" className="leaf2" />
                      <img src={leaf3} alt="" className="leaf3" />
                      <Form>
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
                        <Button variant="primary" type="submit" className="button-submit" onClick={HandleRegisterSubmit}> Submit</Button>
                      </Form>
                    </Modal.Body>
                  </Modal>
                  {/* end modal register */}

                  {/* modal login */}
                  <Nav.Link className="login" onClick={handleShowLog}  >Login</Nav.Link>
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
                        <Button variant="primary" type="submit" className="button-submit"onClick={HandleLoginSubmit}>Submit</Button>
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
