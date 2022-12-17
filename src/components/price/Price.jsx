import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

// image
import plus from '../../assets/img/plus.png'
import minus from '../../assets/img/minus.png'

// css
import './Price.scss'

// data dummy
import dummyData from '../../db.js'


const Price = () => {

    const navigate = useNavigate()

    // panggil usestate dengan set data = 0
    const [number, setNumber] = useState(0)

    // HandlerPlus Function
    const HandlerPlus = () => {
        setNumber(number+1)
    }

    //HandlerMinus Function
    const HandlerMinus = () => {
        if (number <= 0) {
            return 0
        } else {
            setNumber(number-1)
        }
    }

    // Get parameter
    let {id} = useParams()
    id = parseInt(id)

    return (
        <>
            {dummyData.map(data => (
                data.id === id &&
                <div className='price-container'>
                <div className='line1'>
                    <div className='sub-line1'>
                        <h5 className='price'>IDR. {data.price}</h5>
                        <h5 className='person'> / Person</h5>
                    </div>
                    <div className='sub-line2'>
                        <button  onClick={HandlerMinus} className='minus'><img src={minus} alt=""/></button>
                        <h5 className='value'>{number}</h5>
                        <button onClick={HandlerPlus}><img src={plus} alt=""/></button>                            </div>
                    </div>                       
                    <hr />

                    <div className='line1'> 
                        <div className='sub-line1'>
                            <h5 className='total'>Total :</h5>
                        </div>
                        <div className='sub-line2'>
                            <h5 className='price'>IDR. {(data.price * number)}</h5>
                        </div>
                    </div>
                    <hr />
                        
                    <div className='btn-submit'>
                        <button type='submit' onClick={() => navigate('/payment')}>BOOK NOW</button>
                    </div>                           
                </div>
            ))}
        </>
    )
}

export default Price