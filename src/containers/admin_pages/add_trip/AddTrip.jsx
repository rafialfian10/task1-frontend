// components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// API
import { API } from '../../../config/api';

// css
import './AddTrip.scss'

// image
import dropdown from '../../../assets/img/img-dropdown.png'
import attache from '../../../assets/img/attache.png'


const AddTrip = () => {

    const navigate = useNavigate()

    const [preview, setPreview] = useState(null)

    // buat usestate untuk menampung data sementara
    const [form, setForm] = useState({
        title: '',
        countryId: '',
        accomodation: '',
        transportation: '',
        eat: '',
        day: '',
        night: '',
        datetrip: '',
        price: '',
        quota: '',
        description: '',
        image: '',
    })

    // function handlechange data di form
    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]:
            e.target.type === 'file' ? e.target.files : e.target.value, // jika type file maka  form isi file, jika value maka isi value
        })

    // buat url image
    if (e.target.type === 'file') {
        let url = URL.createObjectURL(e.target.files[0]);
        setPreview(url);
      }
    };

    // handle submit
    const handleSubmit = useMutation( async (e) => {
        try {
            // konfigurasi file
            const config = {
                headers: {
                'Content-type': 'multipart/form-data',
                },
            };

            // form data
            const formData = new FormData();
            formData.append('title', form.title);
            formData.append('country_id', form.countryId);
            formData.append('accomodation', form.accomodation);
            formData.append('transportation', form.transportation);
            formData.append('eat', form.eat);
            formData.append('day', form.day);
            formData.append('night', form.night);
            formData.append('datetrip', form.datetrip);
            formData.append('price', form.price);
            formData.append('quota', form.quota);
            formData.append('description', form.description);
            formData.append('image', form.image[0]);

             // Insert trip data
            const response = await API.post('/trip', formData, config);
            console.log("Response :", response);

            navigate('/list_transaction');

        } catch (err) {
            console.log(err)
        }
    })

    return (
        <>
            <div className="add-trip-container">
                <h2 className="add-trip-title">Add Trip</h2>
                <Form className='form-add-trip' onSubmit={(e) => {e.preventDefault()
                 handleSubmit.mutate(e)}}>
                    <Form.Group className="form-group">
                    <Form.Label>Title Trip</Form.Label>
                    <Form.Control className="form-input" name="title" type="text" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="form-group form-dropdown">
                    <Form.Label>Country</Form.Label>
                    <img src={dropdown} alt="" className="dropdown"/>
                    <Form.Select aria-label="Default select example" name="countryId" className="form-input" onChange={handleChange}>
                        <option value=""></option>
                        <option value="1">Australia</option>
                        <option value="2">South Korea</option>
                        <option value="3">indonesia</option>
                        <option value="4">Japan</option>
                        <option value="5">Russia</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="form-group">
                    <Form.Label>Accomodation</Form.Label>
                    <Form.Control className="form-input" name="accomodation" type="text" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="form-group">
                    <Form.Label>Transportation</Form.Label>
                    <Form.Control className="form-input" name="transportation" type="text" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="form-group">
                    <Form.Label>Eat</Form.Label>
                    <Form.Control className="form-input" name="eat" type="text" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="form-group">
                    <Form.Label>Duration</Form.Label>
                    <div className="duration">
                        <Form.Control className="form-input day" name="day" type="number" onChange={handleChange}/>
                        <Form.Label className="label-day">Day</Form.Label>
                        <Form.Control className="form-input night" name="night" type="number" onChange={handleChange}/>
                        <Form.Label className="label-night">Night</Form.Label>
                    </div>
                    </Form.Group>

                    <Form.Group className="form-group">
                    <Form.Label>Date Trip</Form.Label>
                    <Form.Control className="form-input" name="datetrip" type="date" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="form-group">
                    <Form.Label>Price</Form.Label>
                    <Form.Control className="form-input" name="price" type="text" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="form-group">
                    <Form.Label>Quota</Form.Label>
                    <Form.Control className="form-input" name="quota" type="number" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="form-group">
                    <Form.Label>Description</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2">
                        <Form.Control as="textarea" className="form-input" name="description" style={{ height: '100px' }} onChange={handleChange}/>
                    </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="form-group">
                    <Form.Label>Image</Form.Label>
                    <div class="img-upload">
                        <label for="image" class="form-input">
                            <p>Attache Here</p>
                            <img src={attache} alt=""/>
                        </label>
                        <Form.Control className="form-input" name="image" type="file" id="image" onChange={handleChange}/>
                    </div>
                    </Form.Group>

                    <Button variant="primary" type="submit" className='button-add-trip'>Add trip</Button>
                </Form>
            </div>
        </>
    )
}

export default AddTrip