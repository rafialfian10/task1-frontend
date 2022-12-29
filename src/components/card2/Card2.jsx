// components
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom'

// css
import './Card2.scss'

// image
import palm from '../../assets/img/palm.png' 

// api
import { API } from '../../config/api.js'
//----------------------------------------------------------

const Card2 = ()  => {

  const navigate = useNavigate()

  const config = {
    headers: {
    'Content-type': 'multipart/form-data',
    },
  };

  let { data: trips} = useQuery('tripsCaches', async () => {
    const response = await API.get('/trips', config);
    return response.data.data;
  });

  return (
    <>  
    <img src={palm} alt="" className='palm' />
        {trips?.length !== 0 ? (
        <CardGroup className="cards2">
           {trips?.map((trip, i) => (
            <div className="card2" key={i}>
                <div className='page'>
                    <p>12/15</p>
                </div>
                <Card.Img variant="top" src={trip.image} />
                <Card.Body>
                <Card.Title className="card-title" onClick={() => navigate(`/detail/${trip.id}`)}>{trip.title}</Card.Title>
                <div className="card-info">
                <Card.Text className="price">{trip.price.toLocaleString()}</Card.Text>
                <Card.Text className="country">{trip.country.name}</Card.Text>
                </div>
                </Card.Body>
            </div>
        ))}
        </CardGroup>
        ) : (
          <h1> Trip not found </h1>
        )}   
    </>
  );
}

export default Card2;