import FooterAllPage from "../Components/Footer/FooterAllPage"
import Trending from "../Components/Trending/Trending"
import SqrCard from "../Components/Cards/SqrCard"
import RectCard from "../Components/Cards/RectCard"
import HotelCard from "../Components/Cards/HotelCard"
import MoreToExplore from "../Components/MoreToExplore/MoreToExplore"
import TopDestinations from "../Components/TopDestinations/TopDestinations"
import NavbarTop from "../Components/Navbar/NavbarTop"
import NavbarDetail from "../Components/Navbar/NavbarDetail"
import Search from "../Components/Search"
import {HotelBookingCheckin,HotelBookingCheckout,HotelBookingGuests,HotelBookingGuestsDrop} from "../Components/HotelBook/HotelBookingInput"


const Home = () => {
    return (<>
   
    <NavbarTop/>
    <br />
    <br />
     <NavbarDetail/>
     <br />
     <br />
     <Search/>
        <br />
        <HotelBookingCheckin/>
        <br />
        <HotelBookingCheckout/>
         <br />
        <HotelBookingGuests/>
         <br />
        <HotelBookingGuestsDrop/>


        <br />
        <RectCard/>
        <br />
    <TopDestinations/>
    <br />
        <br />
    <MoreToExplore/>
    <br />
        <br />
    <HotelCard/>
    <br />
        <br />
   
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