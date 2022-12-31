// components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";

// API
import { API } from '../../../config/api';

// css
import './AddCountry.scss'

const AddCountry = () => {

    const navigate = useNavigate()

    // buat usestate untuk menampung data sementara
    const [form, setForm] = useState({
        name: "",
    });

    // state error
    const [error, setError] = useState({
        name: "",
      });

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
                'Authorization': localStorage.getItem("token")
                },
            };

            const messageError = {
                name: "",
            }

             // validasi form title
             if (form.name === "") {
                messageError.name = "Country must be filled out";
            } else {
                messageError.name = ""
            }

            // jika semua message error kosong
            if(messageError.name === "") {
                // form data
                const formData = new FormData();
                formData.append('name', form.name);

                // Insert trip data
                const response = await API.post('/country', formData, config);
                console.log("Response :", response);

                Swal.fire({
                    text: 'Country successfully added',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })

                navigate('/incom_trip');
            } else {
                setError(messageError)
            }
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
                    {/* <Form.Control className="form-input" id="name" name="name" onChange={handleChange}/> */}
                    <ReactFlagsSelect className="form-input flag-input" name="name" onChange={handleChange} selected={form} onSelect={(code) => {setForm(code); console.log("form",form)}}/>
                  
                    {error.name && <Form.Text className="text-danger">{error.name}</Form.Text>}
                    </Form.Group>
                    <Button variant="primary" type="submit" className='button-add-country'>Add Country</Button>
                </Form>
            </div>
        </>
    )
}

export default AddCountry