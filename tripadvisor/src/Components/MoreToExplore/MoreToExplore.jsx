import React from 'react'
import MoreToExploreCard from './MoreToExploreCard'
import styles from "./MoreToExplore.module.css"

const data = [

  {
    imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/ab/94/ba/2de5214a-d5dc-42d2.jpg?w=800&h=-1&s=1",
    title: "5 beautiful hill stations in south India"
  },

  {
    imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/20/d4/45276d36-cc36-4a32.jpg?w=800&h=-1&s=1",
    title: "11 beautiful places in india that have to be seen to be believed"
  },

  {
    imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/2e/9a/2520956e-5665-4e9f.jpg?w=800&h=-1&s=1",
    title: "Best time to visite Dubai for great weather and deals"
  },

  {
    imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/ab/94/ba/2de5214a-d5dc-42d2.jpg?w=800&h=-1&s=1",
    title: "5 beautiful hill stations in south India"
  },

  {
    imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/20/d4/45276d36-cc36-4a32.jpg?w=800&h=-1&s=1",
    title: "11 beautiful places in india that have to be seen to be believed"
  },

  {
    imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/2e/9a/2520956e-5665-4e9f.jpg?w=800&h=-1&s=1",
    title: "Best time to visite Dubai for great weather and deals"
  },

]

const MoreToExplore = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <h2>More to Explore</h2>
        <div className={styles.container}>
          {
            data.map((el, i) => <MoreToExploreCard {...el} key={i} />)
          }
        </div>
      </div>
    </div>
  )
}

export default MoreToExplore
