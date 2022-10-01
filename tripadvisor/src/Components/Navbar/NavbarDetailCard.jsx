import React from 'react'
import {Link} from 'react-router-dom'
import styles from "./NavbarDetail.module.css"


const NavbarDetailCard = ({title,icon}) => {
  return (
      <Link  style={{ textDecoration:'none'}} className={styles.box} to="#">{title}{icon}</Link>
  )
}

export default NavbarDetailCard
