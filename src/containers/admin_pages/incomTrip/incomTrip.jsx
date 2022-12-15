// components
import Navbar from "../../../components/navbar/Navbar"
import Card2 from "../../../components/card2/Card2"
import Footer from "../../../components/footer/Footer"

// css
import './incomTrip.scss'

const IncomTrip = () => {
    return (
        <>
            <Navbar/>
            <div className="title">
                <h4>Income Trip</h4>
                <button>Add Trip</button>
            </div>
            <Card2/>
            <Footer/>
        </>
    )
}

export default IncomTrip