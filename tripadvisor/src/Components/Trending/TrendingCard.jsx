import styles from "./TrendingCard.module.css"

const TrendingCard = ()=> {

    return(
<div className={styles.box}>
    <div><h3>Tour Guide Required</h3></div>
    <div>
        <div><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/45/0a/43/roopinder.jpg?w=100&h=-1&s=1" alt="name-err" /></div>
        <div>By <span>Rupunder.</span> 1 Reply</div>
    </div>
</div>
    )
}
export default TrendingCard