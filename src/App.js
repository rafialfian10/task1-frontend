import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbars from "./components/navbar/Navbar";
import Detail from "./containers/pages/detail/Detail";
import Login from "./containers/pages/login/Login";
import Register from "./containers/pages/register/Register";

// Pages
import Home from "./Home/Home";


function App() {
  return (
    <Router>
      <Navbars/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="detail/" element={<Detail/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
