import { useParams } from 'react-router-dom'

// image
import detail2 from '../../assets/img/detail2.png'
import detail3 from '../../assets/img/detail3.png'
import detail4 from '../../assets/img/detail4.png'

// css
import './DetailImage.scss'

// data dummy
import dummyData from '../../db.jsx'

const DetailImage = () => {

    // Get parameter
    let {id}= useParams()
    id = parseInt(id)

    // get data json
    const datas = dummyData.posts

    return (
        <>
        {datas.map(data => (
            data.id === id && 
            <div>
                <h1 className='title-detail'>{data.title}</h1>
                <p className='title-country'>{data.country}</p>
                <div className="thumbnail">
                    <img src={data.image} className="img-thumbnail" alt=""/>
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