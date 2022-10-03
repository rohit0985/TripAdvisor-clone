import React,{useContext} from 'react'
import styles from "./Search.module.css" 
import {SearchIcon} from '@chakra-ui/icons'
import { SearchContext } from '../Context/SearchContext/SearchContext'


const Search = () => {
const {search, setSearch} = useContext(SearchContext)



console.log(search)
  return (
    <div className={styles.container}>
      <img src="https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans@2x.webp" alt="serach-img-error"/>
      <div>
      <div><SearchIcon/></div>
      <div><input type="text" placeholder='Where to?' onKeyDown={(e)=>setSearch(e.target.value.trim())}/></div>
      </div>
    </div>
  )
  
}

export default Search
