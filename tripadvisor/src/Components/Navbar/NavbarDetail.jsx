import React from 'react'
import NavbarDetailCard from './NavbarDetailCard'
import styles from "./NavbarDetail.module.css"
import {BiBed,BiRestaurant} from "react-icons/bi"
import {MdOutlineLocalActivity,MdHolidayVillage,MdOutlineForum} from "react-icons/md"


let data = [
    {
        title:"Hotels",
        path: "/hotel",
        icon: <BiBed/>
    },
    {
        title:"Things to Do",
        path: "#",
        icon: <MdOutlineLocalActivity/>
    },
    {
        title:"Holiday Homes",
        path: "#",
        icon: <MdHolidayVillage/>
    },
    {
        title:"Restaurents",
        path: "#",
        icon: <BiRestaurant/>
    },
    {
        title:"Travel Forum",
        path: "#",
        icon: <MdOutlineForum/>
    },
]

const NavbarDetail = () => {
  return (
    <div className={styles.container}>
      {
        data.filter((el,i)=> i<data.length).map((el)=> <NavbarDetailCard {...el}/>)
      }<NavbarDetailCard path="/cart" title="Cart"/>
    </div>
  )
}

export default NavbarDetail
