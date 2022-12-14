import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// Pages
// import Navbars from "./components/navbar/Navbar";
import Home from "./Home/Home";
import Detail from "./containers/pages/detail/Detail";
import Register from "./containers/pages/register/Register";
import Login from "./containers/pages/login/Login";
import Payment from "./containers/pages/payment/Payment";
import IncomTrip from "./containers/pages/incomTrip/incomTrip";
import ListTransaction from "./containers/pages/listTransaction/ListTransaction";
import Profile from "./containers/pages/profile/Profile";


function App() {
  return (
    <Router>
      {/* <Navbars/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/detail" element={<Detail/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/payment" element={<Payment/>}/>
        <Route exact path="/profile" element={<Profile/>}/>

        <Route exact path="/listtransaction" element={<ListTransaction/>}/>
        <Route exact path="/incomtrip" element={<IncomTrip/>}/>
      </Routes>
    </Router>
  );
}

export default App;
