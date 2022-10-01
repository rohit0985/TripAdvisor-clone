import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./NavbarTop.module.css"

const NavbarTop = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="error" />
      </div>


      <div>
        <div><Link to="#" style={{textDecoration:'none', color:"black"}} >Review</Link></div>
        <div><Link to="#" style={{textDecoration:'none', color:"black"}}>Trips</Link></div>
        <div><Link to="#" style={{textDecoration:'none', color:"black"}}>Alerts</Link></div>
        <div><Link to="#" style={{textDecoration:'none', color:"white"}}>Sign in</Link></div>
      </div>
    </div>
  )
}

export default NavbarTop
