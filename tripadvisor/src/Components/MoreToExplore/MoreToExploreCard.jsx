import React from 'react'
import styles from "./MoreToExplore.module.css"

const MoreToExploreCard = ({imgUrl, title}) => {
  return (
    <div className={styles.box}>
      <div>
        <img src={imgUrl} alt="error" />
      </div>
      <div>
        <p>From <span>Tripadvisor</span></p>
        <p>{title}</p>
      </div>
    </div>
  )
}
export default MoreToExploreCard
