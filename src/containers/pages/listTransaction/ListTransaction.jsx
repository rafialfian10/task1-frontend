import Navbar from "../../../components/navbar/Navbar"
import Footer from "../../../components/footer/Footer"
import Table from 'react-bootstrap/Table';

// css
import './ListTransaction.scss'

// image
import search from '../../../assets/img/search.png'


function Admin() {
  return (
    <>
     <Navbar/>
     <h4>Incoming Transaction</h4>
     <Table striped bordered hover className="table">
        <thead>
            <tr>
            <th>No</th>
            <th>Users</th>
            <th>Trip</th>
            <th>Bukti Transfer</th>
            <th>Status Payment</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Radif Ganteng</td>
            <td>6D/4N Fun Tassie Vacation...</td>
            <td>bca.jpg</td>
            <td>Pending</td>
            <td><img src={search} alt="" className="search" /></td>
            </tr>
            <tr>
            <td>2</td>
            <td>Arif Rahman</td>
            <td>6D/4N Exiting Summer in...</td>
            <td>bni.jpg</td>
            <td>Approve</td>
            <td><img src={search} alt="" className="search" /></td>
            </tr>
            <tr>
            <td>3</td>
            <td>Amin Subagiyo</td>
            <td>6D/4N Fun Tassie Vacation...</td>
            <td>pertama.png</td>
            <td>Cancel</td>
            <td><img src={search} alt="" className="search" /></td>
            </tr>
            <tr>
            <td>4</td>
            <td>Haris Astina</td>
            <td>8D/6N Wonderful Autum...</td>
            <td>bi.png</td>
            <td>Cancel</td>
            <td><img src={search} alt="" className="search" /></td>
            </tr>
            <tr>
            <td>5</td>
            <td>Aziz Oni On</td>
            <td>5D/4N Magic Tokyo Fun</td>
            <td>pertama.png</td>
            <td>Pending</td>
            <td><img src={search} alt="" className="search" /></td>
            </tr>
            <tr>
            <td>6</td>
            <td>Sugeng No Pants</td>
            <td>4D/3N Labuan Bajo Delight</td>
            <td>bni.png</td>
            <td>Approve</td>
            <td><img src={search} alt="" className="search" /></td>
            </tr>
        </tbody>
        </Table>
        <Footer/>
    </>
   
  );
}

export default Admin;