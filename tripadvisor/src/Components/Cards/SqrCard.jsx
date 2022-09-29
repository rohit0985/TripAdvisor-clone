import styles from "./SqrCard.module.css"

const SqrCard = ()=> {
return(
    <div className={styles.Box}>
        <div><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/6d/2c/c0/caption.jpg?w=600&h=600&s=1" alt="error" />
        <div>

        </div>
        </div>
        <div>
            <h3>Best of Lucknow (Guided Halfday Sightseeing Tour by Car)</h3>
           <div className={styles.Review}>
          <div >
          <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
          </div>
          <p> 157 reviews</p>
           </div>
<h3>from ₹4,800 per group</h3>
        </div>
    </div>
)
}
export default SqrCard