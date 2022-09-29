import styles from "./RectCard.module.css"

const RectCard = ()=> {
return(
    <div className={styles.Box}>
        <div><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/2e/0d/c4/snapchat-753121482-largejpg.jpg?w=800&h=600&s=1" alt="error" />
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
          <p> 157</p>
           </div>
           <div><p>Architectural Buildings, Monuments & Statues</p></div>
        </div>
    </div>
)
}
export default RectCard