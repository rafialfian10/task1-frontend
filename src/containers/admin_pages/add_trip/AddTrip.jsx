// components
import Footer from "../../../components/footer/Footer"
import Navbar from "../../../components/navbar/Navbar"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

// css
import './AddTrip.scss'

// image
import dropdown from '../../../assets/img/img-dropdown.png'
import attache from '../../../assets/img/attache.png'


const AddTrip = () => {
    return (
        <>
            <Navbar/>
            <div className="add-trip-container">
                <h2 className="add-trip-title">Add Trip</h2>
                <Form className='form-add-trip'>
                    <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label>Title Trip</Form.Label>
                    <Form.Control className="form-input" type="text"/>
                    </Form.Group>

                    <Form.Group className="form-group form-dropdown" controlId="formBasicPassword">
                    <Form.Label>Country</Form.Label>
                    <img src={dropdown} alt="" className="dropdown"/>
                    <Form.Select aria-label="Default select example" className="form-input">
                        <option value=""></option>
                        <option value="indonesia">indonesia</option>
                        <option value="australia">Australia</option>
                        <option value="japan">Japan</option>
                        <option value="south-korea">South Korea</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label>Accomodation</Form.Label>
                    <Form.Control className="form-input" type="text"/>
                    </Form.Group>

                    <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label>Transportation</Form.Label>
                    <Form.Control className="form-input" type="text"/>
                    </Form.Group>

                    <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label>Eat</Form.Label>
                    <Form.Control className="form-input" type="text"/>
                    </Form.Group>

                    <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label>Duration</Form.Label>
                    <div className="duration">
                        <Form.Control className="form-input day" type="day"/>
                        <Form.Label className="label-day">Day</Form.Label>
                        <Form.Control className="form-input night" type="night"/>
                        <Form.Label className="label-night">Night</Form.Label>
                    </div>
                    </Form.Group>

                    <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label>Date Trip</Form.Label>
                    <Form.Control className="form-input" type="text"/>
                    </Form.Group>

                    <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control className="form-input" type="text"/>
                    </Form.Group>

                    <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label>Quota</Form.Label>
                    <Form.Control className="form-input" type="text"/>
                    </Form.Group>

                    <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2">
                        <Form.Control as="textarea" className="form-input" style={{ height: '100px' }}/>
                    </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <div class="img-upload">
                        <label for="image" class="form-input">
                            <p>Attache Here</p>
                            <img src={attache} alt=""/>
                        </label>
                        <Form.Control className="form-input" type="file" id="image"/>
                    </div>
                    </Form.Group>

                    <Button variant="primary" type="submit" className='button-add-trip'>Add trip</Button>
                </Form>
            </div>
            <Footer/>
        </>
    )
}

export default AddTrip