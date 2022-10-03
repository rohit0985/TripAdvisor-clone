import React from 'react'
import { createContext, useState, useEffect } from 'react'


export const cartContext = createContext()
const CartContextProvider = ({children}) => {
const [cart, setCart] = useState([])

  return (
    <cartContext.Provider value={{cart, setCart}}>
      {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider
