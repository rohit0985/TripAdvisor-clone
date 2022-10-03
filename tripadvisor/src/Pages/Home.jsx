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
import ThingsToDo from "../Components/ThingsToDo/ThingsToDo"
import {HotelBookingCheckin,HotelBookingCheckout,HotelBookingGuests,HotelBookingGuestsDrop} from "../Components/HotelBook/HotelBookingInput"
import img1 from "../Components/tripadvisor.png"
import {AuthContext} from "../Context/AuthContext/AuthContext"

import React, {useEffect, useContext} from 'react'
import axios from "axios"
import { useState } from "react"
import {SearchContext} from "../Context/SearchContext/SearchContext"



let search="lucknow"

const Home = () => {
const [data, setData] = useState([])
const {token, setToken}= useContext(AuthContext)

console.log(token, setToken)

useEffect(()=>{
    axios.get(`https://my-jsih.herokuapp.com/destinations`)
    .then((res)=> setData(res.data[search]))
},[])










    return (<div>
<NavbarTop/>
<br />
<br />
<NavbarDetail/>
<br />
<Search/>
<br />
<ThingsToDo data={data}/>
<br />
<MoreToExplore/>
<br />
<TopDestinations/>
<br />
<Trending/>
<br />
<br />
<img src={img1} style={{ width:"100vw"}}/>
<br />
<FooterAllPage/>
    </div>)
}
export default Home