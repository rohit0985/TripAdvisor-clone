
import React, {useEffect} from 'react'
import axios from "axios"
import { useState } from "react"
import HotelCard from "../Components/Cards/HotelCard"
import { BiFontSize } from 'react-icons/bi'

import NavbarTop from "../Components/Navbar/NavbarTop"
import NavbarDetail from "../Components/Navbar/NavbarDetail"



let search="lucknow"

const Hotel = () => {
const [data, setData] = useState([])
const [filter, setFilter] = useState("")
useEffect(()=>{
    axios.get(`https://my-jsih.herokuapp.com/destinations`)
    .then((res)=>{
        if(filter){
            setData(res.data[search].hotels.filter((el)=> el.bed_ize.includes(filter)))
        }
        setData(res.data[search].hotels)
    })
},[filter])


  return (<div>
    <NavbarTop/>
    <br />
    <br />
<NavbarDetail/>
<br />
   <div style={{display:"grid", gridTemplateColumns:"20% 78%",gap:'2%', width:'90%', margin:"auto"}}>
    <div style={{display:'flex', flexDirection:"column", gap:"10px", position:'sticky', top:"0px"}}>
       <div style={{ padding:"15px"}}>
       <h4>Bed Size</h4>
       <div>
        <input type="checkBox" id='single' onClick={(e)=>setFilter(e.target.checked ? e.target.id : "")}/>
        <label htmlFor="">Single</label>
        </div>
        <div>
        <input type="checkBox" id='double' onClick={(e)=>setFilter(e.target.checked ? e.target.id : "")}/>
        <label htmlFor="">Double</label>
        </div>
        <div>
        <input type="checkBox" id='king' onClick={(e)=>setFilter(e.target.checked ? e.target.id : "")}/>
        <label htmlFor="">King</label>
        </div>
        <div>
        <input type="checkBox" id='queen' onClick={(e)=>setFilter(e.target.checked ? e.target.id : "")}/>
        <label htmlFor="">Queen</label>
        </div>
       </div>
       
    </div>

    <div style={{display:"flex", flexDirection:"column", gap:"15px"}}>
      {
        data && data.map((el,i)=> <div><HotelCard data ={data} el={el} idx={i+1} /></div> )
      }
    </div>
   </div>
   </div>)
}

export default Hotel
