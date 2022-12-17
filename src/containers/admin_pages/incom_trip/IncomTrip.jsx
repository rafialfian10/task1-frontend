// components
import { useNavigate } from "react-router-dom"
import Card2 from "../../../components/card2/Card2"

// css
import './IncomTrip.scss'

const IncomTrip = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="title">
                <h4>Income Trip</h4>
                <button onClick={() => navigate('/add_trip')}>Add Trip</button>
            </div>
            <Card2/>
        </>
    )
}

export default IncomTrip