import React from "react";

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// css
import './Home.scss';

// components
import Jumbotron from "../components/jumbotron/Jumbotron";
import Card1 from "../components/card1/Card1";
import Card2 from "../components/card2/Card2";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
    return (
        <>
            <Navbar/>
            <Jumbotron/>
            <Card1/>
            <h1>Group Tour</h1>
            <Card2/>
            <Footer/>
        </>     
    )
}

export default Home