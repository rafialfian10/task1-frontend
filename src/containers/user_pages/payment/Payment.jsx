// components
import { useState } from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Popup from "../../../components/popup/Popup";
import {price, qty} from '../../../components/price/Price'
import {title, country} from '../../../components/detailImage/DetailImage'

// css
import "./Payment.scss";

// image
import icon from "../../../assets/img/icon.png";
import img_payment from "../../../assets/img/img-payment.png";

// export ke (Profile) agar dapat dimanfaatkan untuk menampung data
export let title2 = ""
export let country2 =  ""
export let price2 = 0
export let qty2 = 0

const Payment = () => {
  const [popup, setPopup] = useState(false);

  // get id
  let { id } = useParams();
  id = parseInt(id); 

  // get local storage user
  let localStoragedata = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Popup popup={popup} setPopup={setPopup} />
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
            <h3 className="title">{title2 = title}</h3>
            <p className="country">{country2 = country}</p>
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

        {localStoragedata.map((data,i ) =>
            data.id === id && (
              <Table striped bordered hover className="tables" key={i}>
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
                    <td>{data.name}</td>
                    <td>Male</td>
                    <td>{data.phone}</td>
                    <td className="fw-bold">Qty</td>
                    <td className="fw-bold">: {qty2 = qty}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="fw-bold">Total</td>
                    <td className="fw-bold text-danger">: IDR. {price2 = price}</td>
                  </tr>
                </tbody>
              </Table>
            )
        )}
      </div>
      <div className="btn-pay">
        <button type="submit" onClick={() => setPopup(true)}>Pay</button>
      </div>
    </>
  );
};

export default Payment;
