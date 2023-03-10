// components
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Card2 from "../../../components/card2/Card2"

// css
import './IncomTrip.scss'
import AddCountry from "../add_country/AddCountry"

const IncomTrip = () => {
    const navigate = useNavigate()

    // create useState dengan nilai awal false
  const [modalApproved, setModalApproved] = useState(false)
    return (
        <>
         <AddCountry modalApproved={modalApproved} setModalApproved={setModalApproved}/>
            <div className="title">
                <h4>Income Trip</h4>
                <div className="button-add">
                    <button onClick={() => setModalApproved(true)}>Add Country</button>
                    <button onClick={() => navigate('/add_trip')}>Add Trip</button>
                </div>
            </div>
            <Card2/>
        </>
    )
}

export default IncomTrip