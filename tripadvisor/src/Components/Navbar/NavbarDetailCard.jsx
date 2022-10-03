import React from 'react'
import {Link} from 'react-router-dom'
import styles from "./NavbarDetail.module.css"


const NavbarDetailCard = ({title,icon,path}) => {
  return (
      <Link  style={{ textDecoration:'none'}} className={styles.box} to={path}>{title}{icon}</Link>
  )
}

export default NavbarDetailCard
