import React,{useContext, useState} from 'react'
import { cartContext } from '../Context/CartContext/CartContext'
import HotelCard from '../Components/Cards/HotelCard'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const {cart} = useContext(cartContext)
   const navigate = useNavigate()
  return (
    
      <div>
       
    <div style={{display:"flex", flexDirection:"column", gap:"15px"}}>
      {
        cart && cart.map((el,i)=> <div><HotelCard data ={cart} el={el} idx={i+1} /></div> )
      }
    </div>
    <button onClick={()=>navigate("/")} >Back To Home</button>
    </div>
  )
   
  
}

export default Cart











  

