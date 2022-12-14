import detail1 from '../../assets/img/detail1.png'
import detail2 from '../../assets/img/detail2.png'
import detail3 from '../../assets/img/detail3.png'
import detail4 from '../../assets/img/detail4.png'

import './DetailImage.scss'

const DetailImage = () => {
    return (
        <>
                <h1 className='title-detail'>6D/4N Fun Tassie Vacation + Sidney</h1>
                <p className='title-country'>Australia</p>
                <div className="thumbnail">
                    <img src={detail1} className="img-thumbnail" alt=""/>
                    <div className="img-thumbnail thumb">
                        <img src={detail2} style={{width:'22vw'}} alt=""/>
                        <img src={detail3} style={{width:'22vw'}} alt=""/>
                        <img src={detail4} style={{width:'22vw'}} alt=""/>
                    </div>
                </div>
        </>
    )
}

export default DetailImage