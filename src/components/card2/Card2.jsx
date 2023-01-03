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

const Card2 = (props)  => {

  const navigate = useNavigate()

  const config = {
    headers: {
    'Content-type': 'multipart/form-data',
    },
  };

  // get data trips
  let { data: trips} = useQuery('tripsCache', async () => {
    const response = await API.get('/trips', config);
    return response.data.data;
  });


  // let filteredData = trips.filter((el) => {
  //   // if (props.input === '') {
  //   //     return el;
  //   // } else {
  //   //     return el.text.toLowerCase().includes(props.input)
  //   // }
  // })

  return (
    <>  
      {/* {filteredData.map((item) => ( */}
        <>
          <img src={palm} alt="" className='palm' />
            {trips?.length !== 0 ? (
                    <CardGroup className="cards2">
                       {trips?.map((trip, i) => {
                        return (
                          <div className="card2" key={i}>
                              <div className='page'>
                                {trip.quota < 0 ? <p>{trip.quota = 0 }</p>: <p>{trip.quota}</p>}
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
                        )
                      })}
                    </CardGroup>
            ) : (
            <h1> Trip not found </h1>
            )}   
        </>
    </>
  );
}

export default Card2;