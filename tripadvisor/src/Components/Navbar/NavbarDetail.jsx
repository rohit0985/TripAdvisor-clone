import React from 'react'
import NavbarDetailCard from './NavbarDetailCard'
import styles from "./NavbarDetail.module.css"
import {BiBed,BiRestaurant} from "react-icons/bi"
import {MdOutlineLocalActivity,MdHolidayVillage,MdOutlineForum} from "react-icons/md"


let data = [
    {
        title:"Hotels",
        icon: <BiBed/>
    },
    {
        title:"Things to Do",
        icon: <MdOutlineLocalActivity/>
    },
    {
        title:"Holiday Homes",
        icon: <MdHolidayVillage/>
    },
    {
        title:"Restaurents",
        icon: <BiRestaurant/>
    },
    {
        title:"Travel Forum",
        icon: <MdOutlineForum/>
    },
]

const NavbarDetail = () => {
  return (
    <div className={styles.container}>
      {
        data.filter((el,i)=> i<data.length).map((el)=> <NavbarDetailCard {...el}/>)
      }<NavbarDetailCard title="More"/>
    </div>
  )
}

export default NavbarDetail
