import styles from "./HotelCard.module.css";
import {cartContext} from "../../Context/CartContext/CartContext";
import { useContext } from "react";

const HotelCard = ({el, idx,data}) => {
    const {name, xPrice,price,vendorInner1, price1,vendorInner2,price2,vendorInner3,price3,taLnk, provider_logo, review,review_count, reviewer,reviewerProfile,cancelation, image} =el;

    
   const {cart, setCart} = useContext(cartContext)

    console.log(cart)
    return (
        <div className={styles.box}>
            <div>
                <img
                    src={image}
                    alt="error-hotel-img"
                />
            </div>

            <div>
                <h2>{idx}. {name}</h2>

                <div className={styles.desc}>
                    <div>
                        <div>
                            <div className={styles.dealBook}>
                                <img
                                    src="https://static.tacdn.com/img2/branding/hotels/Agoda.png"
                                    alt="error-logo-img"
                                />
                                <h2 className={styles.price}>{xPrice}</h2>
                                <h2 className={styles.actPrice}>{price}</h2>
                                <button onClick={()=>setCart([...cart, el])}>
                                    <p>View deal</p>
                                </button>
                            </div>
                            <div className={styles.servises}>
                                <p>{cancelation}</p>
                                <p>
                                    <span></span>Reserve now, Pay at stay
                                </p>
                            </div>
                        </div>

                        <div className={styles.booking}>
                            <div>
                                <div>
                                    <a href="#">{vendorInner1}</a>
                                    <p>{price1}</p>
                                </div>
                                <div>
                                    <a href="#">{vendorInner2}</a>
                                    <p>{price2}</p>
                                </div>
                                <div>
                                    <a href="#">{vendorInner3}</a>
                                    <p>{price3}</p>
                                </div>
                            </div>
                            <div>
                                <p>{taLnk}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.review}>
                        <div>
                            <div className={styles.reviewCount}>
                            <div style={{ display: "flex", gap: "5px" }}>
                        {
                            new Array(3).fill().map((el, i) => <div key={i} style={{ width: "10px", height: '10px', borderRadius: '50%', background: "green" }}></div>)
                        }
                        {
                            new Array(5 - 3).fill().map((el, i) => <div key={i} style={{ width: "10px", height: '10px', borderRadius: '50%', background: "gray" }}></div>)
                        }
                    </div>
                                <div>
                                    <p>{review_count}</p>
                                </div>
                            </div>
                            <div>
                                <p>#{idx} Best Value of {data.length} places to stay in Lucknow</p>
                            </div>

                            <div>
                                <div className={styles.reviewer}>
                                    <img
                                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/ea/74/default-avatar-2020-68.jpg?w=100&h=-1&s=1"
                                        alt="error"
                                    />
                                    <p>
                                        By <span>{reviewer}</span>
                                    </p>
                                </div>
                                <div>
                                    <p>{review}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HotelCard;
