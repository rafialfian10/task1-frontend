// component
import Description from '../../../components/description/Description'
import DetailImage from '../../../components/detailImage/DetailImage'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/navbar/Navbar'
import Price from '../../../components/price/Price'

const Detail = () => {
    return (
        <>
            <Navbar/>
            <DetailImage/>
            <Description/>
            <Price/>
            <Footer/>
        </>
    )
}

export default Detail