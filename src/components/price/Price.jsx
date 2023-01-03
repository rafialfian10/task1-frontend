import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useMutation } from 'react-query';
import Swal from "sweetalert2";

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
    
  let {id}= useParams()
  id = parseInt(id)

  const [number, setNumber] = useState(0)

  // HandlerPlus Function
  const HandlerPlus = () => {
      setNumber(number+1)
      if (number === detailTrips?.quota){
        setNumber(detailTrips?.quota)
        Swal.fire({
          text: 'Quota is empty',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      } else if(detailTrips?.quota === 0){
        setNumber(detailTrips?.quota)
      }
  }

  //HandlerMinus Function
  const HandlerMinus = () => {
    if (number <= 1) {
      return 1
    } else {
        setNumber(number-1)
    }
  }

  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js"; // panngil snap middtrans
    const myMidtransClientKey = "SB-Mid-client-xBHWdiuU4aVE9vOq"; // clint key untuk custom snap
  
    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
   
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);
  
    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);
  //----------------------------------------

 // handle snap buy (parameter dari trip yang dilooping)
 const handleBuy = useMutation(async (trip) => {
  try {
    // Get data from trip
    const data = {
      qty: number,
      total: number * trip.price,
      tripId: trip.id,
    };

    // Configuration
    const config = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-type": "multipart/form-data",
      },
    };

    const formData = new FormData()
    formData.append("qty", data.qty)
    formData.append("total", data.total)
    formData.append("trip_id", data.tripId)

    // Insert transaction data
    const response = await API.post("/transaction", formData, config);

    console.log("response beli", response)
    const token = response.data.data.token
    console.log(token)

    window.snap.pay(token, {
      onSuccess: function (result) {
        console.log(result);
        Swal.fire({
          text: 'Transaction success',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        navigate(`/profile/${id}`);
        window.location.reload()
      },
      onPending: function (result) {
        console.log(result);
        navigate(`/detail/${id}`);
        window.location.reload()
      },
      onError: function (result) {
        console.log(result);
        Swal.fire({
          title: 'Are you sure to cancel transaction?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              icon: 'success',
              text: 'cancel transaction successfully'
        })
        }
        })
        navigate(`/detail/${id}`)
        
      },
      onClose: function () {
        Swal.fire({
          text: 'please make payment first',
          confirmButtonText: 'Ok'
        })

      },
    })

  } catch (error) {
    console.log(error);
  }
});
//--------------------------------------  

// get data trip
let { data: detailTrips} = useQuery('tripsCache', async () => {
  const response = await API.get(`/trip/${id}`);
  console.log(response)
  return response.data.data;
});
    
// handler show login (jika belum login maka lempar kembali ke halaman home)
const showLogin = () => {
  let token = localStorage.getItem("token")
  if(!token) {     
      //alert
      Swal.fire({
          text: 'Please login account',
          icon: 'warning',
          confirmButtonText: 'Ok'
      })
      navigate("/")  
  } 
}

    return (
        <>
            <div className='price-container'>
                <div className='line1'>
                    <div className='sub-line1'>
                        <h5 className='price'>IDR. {detailTrips?.price?.toLocaleString()}</h5>
                        <h5 className='person'> / Person</h5>
                    </div>
                    <div className='sub-line2'>
                        <button  onClick={HandlerMinus} className='minus'><img src={minus} alt=""/></button>
                        {/* {number > detailTrips?.quota ? <p>Quota empty</p> : <h5 className='value'>{number}</h5> } */}
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
                        <button type='submit' onClick={() => {handleBuy.mutate(detailTrips); showLogin()}}>BOOK NOW</button>
                    </div>                           
                </div>
        </>
    )
}

export default Price