import styles from "./SqrCard.module.css"

const SqrCard = ({image,heading,charge,perChange}) => {
   
    return (
        <div className={styles.Box}>
            <div><img src={image} alt="error" />
                <div>

                </div>
            </div>
            <div>
                <h4>{heading}</h4>
                <div className={styles.Review}>
                    <div style={{ display: "flex", gap: "5px" }}>
                        {
                            new Array(3).fill().map((el, i) => <div key={i} style={{ width: "10px", height: '10px', borderRadius: '50%', background: "green" }}></div>)
                        }
                        {
                            new Array(5 - 3).fill().map((el, i) => <div key={i} style={{ width: "10px", height: '10px', borderRadius: '50%', background: "gray" }}></div>)
                        }
                    </div>
                    <p> 157 reviews</p>
                </div>
                <h4>from {charge} {perChange}</h4>
            </div>
        </div>
    )
}
export default SqrCard