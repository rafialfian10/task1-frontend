// components
import Navbar from "../../../components/navbar/Navbar"
import Footer from "../../../components/footer/Footer"
import Table from 'react-bootstrap/Table';

// css
import './Payment.scss'

// image
import icon from '../../../assets/img/icon.png' 
import img_payment from '../../../assets/img/img-payment.png' 

const Payment = () => {
    return (
        <>
            <Navbar/>
            <div className="payment-container">
                <div className="content1">
                    <img src={icon} alt="" />
                    <div className="sub-content1">
                        <h3 className="status">Booking</h3>
                        <p className="date">Saturday, 22 July 2020</p>
                    </div>
                </div>

                <div className="content2">
                    <div className="info-payment">
                        <h3 className="title">6D/4N Fun Tassie Vacation</h3>
                        <p className="country">Australia</p>
                        <p className="status-payment">Waiting Payment</p>
                    </div>

                    <div className="info-tour">
                        <div className="sub-info-tour">
                            <div className="date">
                                <h5>Date Trip</h5>
                                <p>26 August 2020</p>
                            </div>
                            <div className="accomodation">
                                <h5>Accomodation</h5>
                                <p>Hotel 4 Nights</p>
                            </div>
                        </div>
                        <div className="sub-info-tour">
                            <div className="duration">
                                <h5>Duration</h5>
                                <p>6 Day 4 Nights</p>
                            </div>
                            <div className="transportation">
                                <h5>Transportation</h5>
                                <p>Qatar Airways</p>
                            </div>
                        </div>
                    </div>

                    <div className="img-payment">
                        <img src={img_payment} alt="" />
                        <p>Upload Payment Proof</p>
                    </div>
                </div>
                <Table striped bordered hover className="tables">
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Full Name</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Radid Ganteng</td>
                        <td>Male</td>
                        <td>083896833112</td>
                        <td className="fw-bold">Qty</td>
                        <td className="fw-bold">: 1</td>
                        </tr>
                        <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="fw-bold">Total</td>
                        <td className="fw-bold text-danger">: IDR. 12,398,000</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
                <div className="btn-pay">
                    <button type="submit">Pay</button>
                </div>                
            
            <Footer/>
        </>
    )
}

export default Payment