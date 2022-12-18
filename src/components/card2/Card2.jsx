import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';

// css
import './Card2.scss'

// image
import palm from '../../assets/img/palm.png' 

// Database
import dummyData from '../../db.js'

const Card2 = ()  =>{
// navigate
const navigate = useNavigate() 

  return (
    <>  
    <img src={palm} alt="" className='palm' />
        <CardGroup className="cards2">
        {dummyData.map((data) => (
            <div className="card2">
                <div className='page'>
                    <p>12/15</p>
                </div>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                <Card.Title className="card-title" onClick={() => navigate(`/detail/${data.id}`)}>{data.title}</Card.Title>
                <div className="card-info">
                <Card.Text className="price">{data.price}</Card.Text>
                <Card.Text className="country">{data.country}</Card.Text>
                </div>
                </Card.Body>
            </div>
        ))}
        </CardGroup>
    </>
  );
}

export default Card2;