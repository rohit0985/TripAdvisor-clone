import FooterAllPage from "../Components/Footer/FooterAllPage"
import Trending from "../Components/Trending/Trending"
import SqrCard from "../Components/Cards/SqrCard"
import RectCard from "../Components/Cards/RectCard"
import HotelCard from "../Components/Cards/HotelCard"
import MoreToExplore from "../Components/MoreToExplore/MoreToExplore"

const Home = () => {
    return (<>
    <MoreToExplore/>
    <br />
        <br />
    <HotelCard/>
    <br />
        <br />
    <RectCard/>
    <br />
        <br />
    <SqrCard/>
    <br />
        <br />
        <Trending />
        <br />
        <br />
        <FooterAllPage />
    </>)
}
export default Home