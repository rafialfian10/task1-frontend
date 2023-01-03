import { useQuery, useMutation } from "react-query";
import { useState } from "react";
import { API } from "../../../config/api";
import Table from 'react-bootstrap/Table';
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

// image
import editIcon from '../../../assets/img/edit.png'
import deleteIcon from '../../../assets/img/delete.png';

// css
import './ListCountry.scss'
import { useParams } from "react-router-dom";

const ListCountry = () => {

  let {id} = useParams()
  id = parseInt(id)

  // create useState dengan nilai awal false
  const [modal, setModal] = useState(false)

  const handleShowModal = () => setModal(true)
  const handleCloseModal = () => setModal(false)

  let no = 1

  // get data transaction
  const config = {
    headers: {
    'Content-type': 'multipart/form-data',
    },
  };

  // get all countries
  let { data: countries, refetch:refetchCountry } = useQuery('CountriesCache', async () => {
    const response = await API.get(`/countries`, config);
    return response.data.data;
  });
  // console.log(countries)
  
  //---------------------------------------------------------------
  
  // update country
  // buat usestate untuk menampung data sementara
  let [form, setForm] = useState({
    name: "",
  });

  // function handlechange data di form
  const handleChange = (e) => {
    setForm({
    ...form,
    [e.target.name]:
        e.target.type === 'file' ? e.target.files : e.target.value, 
    })
  };

  // handle submit country
  let handleSubmitCountry = useMutation(async (e) => {
    try {

      e.preventDefault()
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        }
      }
      // form data
      let formData = new FormData();
      formData.append('name', form.name);

      // patch
      let response = await API.patch(`/country/36`, formData, config);
      console.log(response)
      if(response.status === 200) {
        refetchCountry()
      }
      Swal.fire({
        icon: 'success',
        text: 'Update successfully'
    })
      handleCloseModal(true)

    } catch (err) {
      console.log(err);
    }
  });

    return (
        <>
     <h4>List Country</h4>
     <Table striped bordered hover className="table list-country">
        <thead>
            <tr>
            <th>No</th>
            <th>Country</th>
            <th className="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
          <>
            {countries?.map((country, i) => {
              return (
                <tr>
                <td>{no++}</td>
                <td>{country.name}</td>
                <td className="text-center">
                    <img src={editIcon} alt="" className="search" onClick={() => handleShowModal(true)} />
                    <img src={deleteIcon} alt="" className="search" />
                </td>
                </tr>
              )
            })}
          </>
        </tbody>
        </Table>

        {/* modal country */}
        <Nav.Link className="login" onClick={handleShowModal}>Login</Nav.Link>
        <Modal show={modal} onHide={handleCloseModal} className="modal-country">
          <Modal.Body className="form-country">
              <h2 className="title-country">Update country</h2>
                <Form onSubmit={(e) => handleSubmitCountry.mutate(e)}>
                  <Form.Group className="form-group" controlId="formBasicEmail"> 
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" name="name" onChange={handleChange}/>
                  </Form.Group>
                  <div className="btn-country">
                    <Button variant="primary" type="submit" className="btn-cancel" onClick={handleCloseModal}>cancel</Button>
                    <Button variant="primary" className="btn-add-country">Submit</Button>
                  </div>
                </Form>
          </Modal.Body>
        </Modal>
        {/* end modal country */}
        </>
    )
}

export default ListCountry