import React from 'react'
import TopDestinationsCard from './TopDestinationsCard'
import styles from "./TopDestinations.module.css"

const data = [
    {
        imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6a/ff/2a/caption.jpg?w=600&h=600&s=1&cx=7014&cy=3760&chk=v1_14690e40614ca9b48b73",
        title: "Dubai, United Arab Emitates"
    },
    {
        imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d2/2f/7a/palace-from-the-outside.jpg?w=600&h=600&s=1",
        title: "Bangluru, India"
    },
    {
        imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/80/d7/80/caption.jpg?w=600&h=600&s=1",
        title: "Pune, India"
    },
    {
        imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=600&h=600&s=1",
        title: "Hyderabad, India"
    },
    {
        imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6a/ff/2a/caption.jpg?w=600&h=600&s=1&cx=7014&cy=3760&chk=v1_14690e40614ca9b48b73",
        title: "Dubai, United Arab Emitates"
    },
    {
        imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d2/2f/7a/palace-from-the-outside.jpg?w=600&h=600&s=1",
        title: "Bangluru, India"
    },
    {
        imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/80/d7/80/caption.jpg?w=600&h=600&s=1",
        title: "Pune, India"
    },
    {
        imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=600&h=600&s=1",
        title: "Hyderabad, India"
    },
]

function TopDestinations() {
    return (
        <div className={styles.outer}>
            <h2>Top destinations for your next holiday</h2>
            <div className={styles.container}>

                {
                    data.map((el, i) => <TopDestinationsCard {...el} key={i} />)
                }


            </div>
        </div>
    )
}

export default TopDestinations
