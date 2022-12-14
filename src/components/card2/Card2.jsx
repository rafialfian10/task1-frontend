import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Card2.scss'

import view1 from '../../assets/img/view1.png'
import view2 from '../../assets/img/view2.png'
import view3 from '../../assets/img/view3.png'
import view4 from '../../assets/img/view4.png'
import view5 from '../../assets/img/view5.png'
import view6 from '../../assets/img/view6.png'


const Card2 = ()  =>{
  return (
    <>
    <h1 className='title'>Group Tour</h1>
            <CardGroup className="cards2">
                <div className="card2">
                <div className='page'>
                    <p>12/15</p>
                </div>
                    <Card.Img variant="top" src={view1}/>
                    <Card.Body>
                    <Card.Title className="card-title">6D/4N Fun Tessie Vacation...</Card.Title>
                    <div className="card-info">
                        <Card.Text className="price">IDR. 12,398,000</Card.Text>
                        <Card.Text className="country">Australia</Card.Text>
                    </div>
                    </Card.Body>
                </div>

                <div className="card2">
                <div className='page'>
                    <p>14/15</p>
                </div>
                    <Card.Img variant="top" src={view2} />
                    <Card.Body>
                    <Card.Title className="card-title">6D/4N Exiting Summer in...</Card.Title>
                    <div className="card-info">
                        <Card.Text className="price">IDR. 10,288,000</Card.Text>
                        <Card.Text className="country">South Korea</Card.Text>
                    </div>
                    </Card.Body>
                </div>

                <div className="card2">
                <div className='page'>
                    <p>10/15</p>
                </div>
                    <Card.Img variant="top" src={view3} />
                    <Card.Body>
                    <Card.Title className="card-title">8D/6N Wonderful Autum...</Card.Title>
                    <div className="card-info">
                        <Card.Text className="price">IDR. 28,999,000</Card.Text>
                        <Card.Text className="country">Japan</Card.Text>
                    </div>
                    </Card.Body>
                </div>

                <div className="card2">
                <div className='page'>
                    <p>8/15</p>
                </div>
                    <Card.Img variant="top" src={view4} />
                    <Card.Body>
                    <Card.Title className="card-title">4D/3N Overland Jakarta B...</Card.Title>
                    <div className="card-info">
                        <Card.Text className="price">IDR. 3,188,000</Card.Text>
                        <Card.Text className="country">Indonesia</Card.Text>
                    </div>
                    </Card.Body>
                </div>

                <div className="card2">
                <div className='page'>
                    <p>14/15</p>
                </div>
                    <Card.Img variant="top" src={view5} />
                    <Card.Body>
                    <Card.Title className="card-title">4D/3N Labuan Bajo Delight</Card.Title>
                    <div className="">
                        <Card.Text className="price">IDR. 10,488,000</Card.Text>
                        <Card.Text className="country">Indonesia</Card.Text>
                    </div>
                    </Card.Body>
                </div>

                <div className="card2">
                <div className='page'>
                    <p>10/15</p>
                </div>
                    <Card.Img variant="top" src={view6} />
                    <Card.Body>
                    <Card.Title className="card-title">5D/4N Magic Tokyo Fun</Card.Title>
                    <div className="card-info">
                        <Card.Text className="price">IDR. 11,188,000</Card.Text>
                        <Card.Text className="country">Japan</Card.Text>
                    </div>
                    </Card.Body>
                </div>
            </CardGroup>
        </>
  );
}

export default Card2;