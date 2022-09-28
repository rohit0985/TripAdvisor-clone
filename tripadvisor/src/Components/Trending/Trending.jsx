import TrendingCard from "./TrendingCard";
import styles from "./TrendingCard.module.css"

const trendingArr = [1,2,3]

const Trending = ()=> {
return(
    <div className={styles.Container}>
 {
    trendingArr.map((el)=> <TrendingCard/>) 
 }
 </div> 
)
}
export default Trending