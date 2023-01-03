// components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRouteAdmin, PrivateRouteUser } from "./components/private_route/PrivateRoute";
import {PageNotFound} from "./components/private_route/PrivateRoute";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// pages
import Home from "./Home/Home";
import Detail from "./containers/user_pages/detail/Detail";
import Payment from "./containers/user_pages/payment/Payment";
import IncomTrip from "./containers/admin_pages/incom_trip/IncomTrip";
import ListTransaction from "./containers/admin_pages/list_transaction/ListTransaction";
import Profile from "./containers/user_pages/profile/Profile";
import ModalApproved from "./containers/admin_pages/modal_approved/ModalApproved";
import AddTrip from "./containers/admin_pages/add_trip/AddTrip";
import PaymentPending from "./containers/user_pages/payment_pending/PaymentPending";
import AddCountry from "./containers/admin_pages/add_country/AddCountry";

// api
import { API, setAuthToken } from "./config/api";
import ListCountry from "./containers/admin_pages/list_country/ListCountry";

// local strorage ada maka set header axios
if(localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  // panggil user context(menyimpan data sebagai global state)
  const [state, dispatch] = useContext(UserContext);
  console.clear();
  console.log(state);

  //
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, [state])

  
  const checkUser = async () => {
    try {
      const response = await API.get('/check_auth');

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []);
  return (
    <Router>
      <Navbar/>
      <Routes>
            {/* public */}
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/detail/:id" element={<Detail/>}/>

            {/* admin */}
              <Route element={<PrivateRouteAdmin/>}>
                <Route exact path="/list_transaction" element={<ListTransaction/>}/>
                <Route exact path="/incom_trip" element={<IncomTrip/>}/>
                <Route exact path="/modal_approved" element={<ModalApproved/>}/>
                <Route exact path="/add_trip" element={<AddTrip/>}/>
                <Route exact path="/add_country" element={<AddCountry/>}/> 
                <Route exact path="/list_country" element={<ListCountry/>}/> 
              </Route>

            {/* user */}
            <Route element={<PrivateRouteUser/>} >
              <Route exact path="/payment/:id" element={<Payment/>} />
              <Route exact path="/payment_pending" element={<PaymentPending/>}/>
              <Route exact path="/profile/:id" element={<Profile/>}/>
            </Route>
            
            <Route exact path="/:pageName" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
