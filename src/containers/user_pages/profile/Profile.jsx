// components
import Table from 'react-bootstrap/Table';

// css
import './Profile.scss'

// image
import profile from '../../../assets/img/profile.png'
import map from '../../../assets/img/map.png'
import phone from '../../../assets/img/phone.png'
import message from '../../../assets/img/message.png'
import user1 from '../../../assets/img/user1.png'
import icon from '../../../assets/img/icon.png' 
import qr_code from '../../../assets/img/qr-code.png' 
import { useParams } from 'react-router-dom';

const Profile = () => {

    // get parameter
    let {id} = useParams()
    id = parseInt(id)

    //get local storage lalu parse ke json
    const localStorageData =JSON.parse(localStorage.getItem("user"))
  
    return (
        <>  
            {/* looping local storage */}
            {localStorageData.map((data) => (
                data.id === id &&
                // card profile
                <div className="profile-container">
                <>
                <div className='content-profile1'>
                        <h2>Personal Info</h2>
                        <div className="profile">
                            <img src={profile} alt="" />
                            <div className='sub-profile'>
                                <p className='info1'>{data.name}</p>
                                <p className='info2'>Full Name</p>
                            </div>
                        </div>
                        <div className='email'>
                        <img src={message} alt="" />
                            <div className='sub-email'>
                                <p className='info1'>{data.email}</p>
                                <p className='info2'>Email</p>
                            </div>
                        </div>
                        <div className='phone'>
                        <img src={phone} alt="" />
                            <div className='sub-phone'>
                                <p className='info1'>{data.phone}</p>
                                <p className='info2'>Mobile Phone</p>
                            </div>
                        </div>
                        <div className='address'>
                        <img src={map} alt="" />
                            <div className='sub-address'>
                                <p className='info1'>{data.address}</p>
                                <p className='info2'>Address</p>
                            </div>
                        </div>
                </div>
                </>
            
                <div className='content-profile2'>
                    <img src={user1} alt="" />
                    <button type='submit'>Change Photo Profile</button>
                </div>
                </div>
                // end card profile
            ))}

            {/* history trip */}
            <h1 className='title-history-trip'>History Trip</h1>
            {localStorageData.map((data, i) => (
            data.id === id &&
            <div className="history-container">
                <div className="content1">
                    <img src={icon} alt="" />
                    <div className="sub-content1">
                        <h3 className="status">Booking</h3>
                        <p className="date">Saturday, 22 July 2020</p>
                    </div>
                </div>

                <div className="content2">
                    <div className="history-payment">
                        <h3 className="title">6D/4N Fun Tassie Vacation</h3>
                        <p className="country">Australia</p>
                        <p className="status-payment">Approve</p>
                    </div>

                    <div className="history-tour">
                        <div className="sub-history-tour">
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

                    <div className="qr-code">
                        <img src={qr_code} alt="" />
                        <p>TCK0101</p>
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
                        <td>{data.name}</td>
                        <td>Male</td>
                        <td>{data.phone}</td>
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
            ))}
            {/* end hsitory trip */}
        </>
    )
}

export default Profile