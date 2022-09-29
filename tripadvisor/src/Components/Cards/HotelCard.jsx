import styles from "./HotelCard.module.css";

const HotelCard = () => {
    return (
        <div className={styles.box}>
            <div>
                <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/23/e3/7f/81/exterior.jpg"
                    alt="error-hotel-img"
                />
            </div>

            <div>
                <h2>4. Ramada by Windham Lucknow</h2>

                <div className={styles.desc}>
                    <div>
                        <div>
                            <div className={styles.dealBook}>
                                <img
                                    src="https://static.tacdn.com/img2/branding/hotels/Agoda.png"
                                    alt="error-logo-img"
                                />
                                <h2 className={styles.price}>₹11,213</h2>
                                <h2 className={styles.actPrice}>₹7,10</h2>
                                <button>
                                    <p>View deal</p>
                                </button>
                            </div>
                            <div className={styles.servises}>
                                <p>Free Cancellation</p>
                                <p>
                                    <span>tick</span>Reserve now, Pay at stay
                                </p>
                            </div>
                        </div>

                        <div className={styles.booking}>
                            <div>
                                <div>
                                    <a href="#">Booking.com</a>
                                    <p>₹7,10</p>
                                </div>
                                <div>
                                    <a href="#">Booking.com</a>
                                    <p>₹7,10</p>
                                </div>
                                <div>
                                    <a href="#">Booking.com</a>
                                    <p>₹7,10</p>
                                </div>
                            </div>
                            <div>
                                <p>View all 9 deals from ₹7,10</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.review}>
                        <div>
                            <div className={styles.reviewCount}>
                                <div>
                                    <input type="radio" />
                                    <input type="radio" />
                                    <input type="radio" />
                                    <input type="radio" />
                                    <input type="radio" />
                                </div>
                                <div>
                                    <p>1,134 reviews</p>
                                </div>
                            </div>
                            <div>
                                <p>#4 Best Value of 1,473 places to stay in Lucknow</p>
                            </div>

                            <div>
                                <div className={styles.reviewer}>
                                    <img
                                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/ea/74/default-avatar-2020-68.jpg?w=100&h=-1&s=1"
                                        alt="error"
                                    />
                                    <p>
                                        By <span>Yorenlevi</span>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        {" "}
                                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Veniam, soluta. Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Veniam, soluta."{" "}
                                    </p>
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
