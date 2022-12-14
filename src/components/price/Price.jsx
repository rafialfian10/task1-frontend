// image
import plus from '../../assets/img/plus.png'
import minus from '../../assets/img/minus.png'

import './Price.scss'

const Price = () => {
    return (
        <>
            <form>
                <div className='price-container'>
                    <div className='line1'>
                        <div className='sub-line1'>
                            <h5 className='price'>IDR. 12,398,000 </h5>
                            <h5 className='person'> / Person</h5>
                        </div>
                        <div className='sub-line2'>
                            <button type='submit' className='minus'><img src={minus} alt=""/></button>
                            <h5 className='value'>1</h5>
                            <button type='submit' className='plus'><img src={plus} alt=""/></button>                            </div>
                        </div>                       
                        <hr />

                        <div className='line1'>
                            <div className='sub-line1'>
                                <h5 className='total'>Total :</h5>
                            </div>
                            <div className='sub-line2'>
                                <h5 className='price'>IDR. 12,398,000</h5>
                            </div>
                        </div>
                        <hr />
                        
                        <div className='btn btn-submit'>
                            <button type='submit'>BOOK NOW</button>
                        </div>                     
                </div>
            </form> 
        </>
    )
}

export default Price