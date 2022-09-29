import React from 'react'
import styles from "./TopDestinations.module.css"

function TopDestinationsCard({imgUrl, title}) {
    return (
        <div className={styles.box}>

            <img src={imgUrl} alt="error" />

            <div>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default TopDestinationsCard
