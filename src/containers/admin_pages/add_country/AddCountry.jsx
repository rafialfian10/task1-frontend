// components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// API
import { API } from '../../../config/api';

// css
import './AddCountry.scss'

const AddCountry = () => {

    const navigate = useNavigate()

    // buat usestate untuk menampung data sementara
    const [form, setForm] = useState({
        name: '',
    })

    // function handlechange data di form
    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }

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
            formData.append('name', form.name);

            console.log("Form :", form)

             // Insert trip data
            const response = await API.post('/country', formData, config);
            console.log("Response :", response);

            navigate('/list_transaction');

        } catch (err) {
            console.log(err)
        }
    })

    return (
        <>
            <div className="add-country-container">
                <h2 className="add-country-title">Add Country</h2>
                <Form className='form-add-trip' onSubmit={(e) => {e.preventDefault()
                 handleSubmit.mutate(e)}}>
                    <Form.Group className="form-group">
                    <Form.Label>Country</Form.Label>
                    <Form.Control className="form-input" name="name" type="text" onChange={handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className='button-add-country'>Add Country</Button>
                </Form>
            </div>
        </>
    )
}

export default AddCountry