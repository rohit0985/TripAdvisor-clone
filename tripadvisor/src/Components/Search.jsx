import React from 'react'
import styles from "./Search.module.css" 
import {SearchIcon} from '@chakra-ui/icons'


const Search = () => {
  return (
    <div className={styles.container}>
      <img src="https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans@2x.webp" alt="serach-img-error"/>
      <div>
      <div><SearchIcon/></div>
      <div><input type="text" placeholder='Where to?'/></div>
      </div>
    </div>
  )
  
}

export default Search
