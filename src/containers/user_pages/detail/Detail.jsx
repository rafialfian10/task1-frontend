// component
import Description from '../../../components/description/Description'
import DetailImage from '../../../components/detailImage/DetailImage'
import Price from '../../../components/price/Price'

const Detail = ({price, setPrice}) => {

    return (
        <>
            <DetailImage/>
            <Description/>
            <Price price={price} setPrice={setPrice}/>
        </>
    )
}

export default Detail