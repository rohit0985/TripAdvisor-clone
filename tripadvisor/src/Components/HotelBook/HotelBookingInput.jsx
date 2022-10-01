import React from 'react'
import styles from "./HotelBookingInput.module.css"
import {BsCalendar2Event,BsFillPeopleFill} from "react-icons/bs"
import {BiBed} from "react-icons/bi"
import {IoIosPeople} from "react-icons/io"


const HotelBookingCheckin = () => {
  return (
    <div className={styles.wraperCheckin}>
      <div className={styles.box}>
        <div><BsCalendar2Event/></div>
        <div className={styles.details}>
            <div><p>Checkin</p></div>
            <div><input type="date" /></div>
        </div>
      </div>
    </div>
  )
}
export {HotelBookingCheckin}


const HotelBookingCheckout = () => {
  return (
    <div className={styles.wraperCheckout}>
      <div className={styles.box}>
      <div><BsCalendar2Event/></div>
        <div className={styles.details}>
            <div><p>Checkout</p></div>
            <div><input type="date" /></div>
        </div>
      </div>
    </div>
  )
}
export {HotelBookingCheckout}


const HotelBookingGuests = () => {
  return (
    <div className={styles.wraperGuest}>
      <div className={styles.box}>
      <div><BsFillPeopleFill/></div>
        <div className={styles.details}>
            <div><p>Guests</p></div>
            <div><p>1 room, 1 adult, 0 children</p></div>
        </div>
      </div>
    </div>
  )
}
export {HotelBookingGuests}


const HotelBookingGuestsDrop = () => {
  return (
    <div className={styles.dropBox}>
      
      <div className={styles.row}>
        <div><BiBed/><p>Rooms</p></div>
        <div><button>-</button><button>1</button><button>+</button></div>
      </div>
      <div className={styles.row}>
        <div><BsFillPeopleFill/><p>Adult</p></div>
        <div><button>-</button><button>1</button><button>+</button></div>
      </div>
      <div className={styles.row}>
        <div><IoIosPeople/><p>Children</p></div>
        <div><button>-</button><button>1</button><button>+</button></div>
      </div>

<button>Update</button>
    </div>
  )
}
export {HotelBookingGuestsDrop}



