import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

// image
import plus from '../../assets/img/plus.png'
import minus from '../../assets/img/minus.png'

// css
import './Price.scss'

// api
import { API } from '../../config/api'

// export ke (Payment) agar variabel dapat dimanfaatkan untuk menampung data
export let qty = 0
export let price = 0


const Price = () => {

    const navigate = useNavigate()
    
    // Get parameter
    let {id}= useParams()
    id = parseInt(id)

    let { data: detailTrips} = useQuery('tripsCache', async () => {
       const response = await API.get(`/trip/${id}`);
       console.log(response)
       return response.data.data;
    });


    // panggil usestate dengan set data = 0
    const [number, setNumber] = useState(1)

    // HandlerPlus Function
    const HandlerPlus = () => {
        setNumber(number+1)
    }

    //HandlerMinus Function
    const HandlerMinus = () => {
        if (number <= 1) {
            return 1
        } else {
            setNumber(number-1)
        }
    }

    // handler show login
    const showLogin = () => {
        let login = JSON.parse(localStorage.getItem("isLogin"))
        if(!login) {
            navigate('/')
            alert("Please login account")
        } else {
            navigate(`/payment/:${id}`)
        }
    }

    // get local storage
    let userLogin = localStorage.getItem("userLogin")

    return (
        <>
            <div className='price-container'>
                <div className='line1'>
                    <div className='sub-line1'>
                        <h5 className='price'>IDR. {detailTrips?.price.toLocaleString()}</h5>
                        <h5 className='person'> / Person</h5>
                    </div>
                    <div className='sub-line2'>
                        <button  onClick={HandlerMinus} className='minus'><img src={minus} alt=""/></button>
                        <h5 className='value'>{number}</h5>
                        <button onClick={HandlerPlus}><img src={plus} alt=""/></button>
                    </div>
                </div>                       
                <hr />

                <div className='line1'> 
                    <div className='sub-line1'>
                        <h5 className='total'>Total :</h5>
                    </div>
                    <div className='sub-line2'>
                        <h5 className='price'>IDR. {(detailTrips?.price * number).toLocaleString()}</h5>
                    </div>
                    </div>
                    <hr />
                        
                    <div className='btn-submit'>
                        <button type='submit' onClick={() => navigate(`/payment/${userLogin}`, showLogin() )}>BOOK NOW</button>
                    </div>                           
                </div>
        </>
    )
}

export default Price