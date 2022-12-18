import { useParams } from 'react-router-dom'

// image
import detail2 from '../../assets/img/detail2.png'
import detail3 from '../../assets/img/detail3.png'
import detail4 from '../../assets/img/detail4.png'
import hibiscus from '../../assets/img/hibiscus.png'
import palm from '../../assets/img/palm.png'

// css
import './DetailImage.scss'

// data dummy
import dummyData from '../../db.js'

const DetailImage = () => {

    // Get parameter
    let {id}= useParams()
    id = parseInt(id)

    return (
        <>
        {dummyData.map(data => (
            data.id === id && 
            <div className='detail-img-container'>
                <h1 className='title-detail'>{data.title}</h1>
                <p className='title-country'>{data.country}</p>
                <div className="thumbnail">
                    <img src={data.image} className="img-thumbnail" alt=""/>
                    <img src={hibiscus} alt="" className='detail-hibiscus' />
                    <img src={palm} alt="" className='detail-palm' />
                    <div className="img-thumbnail thumb">
                        <img src={detail2} style={{width:'22vw'}} alt=""/>
                        <img src={detail3} style={{width:'22vw'}} alt=""/>
                        <img src={detail4} style={{width:'22vw'}} alt=""/>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}

export default DetailImage