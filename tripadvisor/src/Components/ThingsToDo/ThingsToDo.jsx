import React from 'react'
import SqrCard from '../Cards/SqrCard'
import styles from './ThingsToDo.module.css'

const ThingsToDo = ({data}) => {
    return (
        <div className={styles.outer}>
            <h2>Ways to tour Lucknow</h2>
            <p>Book these experiences for a close-up look at Lucknow.</p>
            <div className={styles.container}>

              {
                    data.thingsToDo && data.thingsToDo
                    .filter((el,i)=> i<10)
                    .map((el, i) => <div className={styles.box}><SqrCard key={i}  {...el} /></div> )
                }  


            </div>
        </div>
    )
}

export default ThingsToDo
