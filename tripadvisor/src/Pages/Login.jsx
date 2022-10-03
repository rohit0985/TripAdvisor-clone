import React,{useState, useContext} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext/AuthContext'
import styles from "./Login.module.css"


const Login = () => {
const[user, setUser]=useState({
    "email":"",
    "password":""
})
const {token, setToken}= useContext(AuthContext)
const navigate = useNavigate()

const handleChange =(e)=>{
const {name, value} = e.target 

setUser((prev)=>{
    return{
        ...prev, [name]: value
    }
})
}

const handleSubmit= ()=>{
   axios.post(`https://reqres.in/api/login`,{
   ...user
   })
.then((res)=> {
    setToken(res.data.token)
navigate("/")
})
}



  return (
   <div className={styles.container}>
   <h1>TripAdvisor</h1>
   <h3>LogIn</h3>
     <div className={styles.form}>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" placeholder='Email' name="email" value={user.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" placeholder='Password' name="password" value={user.password} onChange={handleChange} />
      </div>
    </div>
    <button disabled={token} onClick={handleSubmit}>Submit</button>
    <br />
    <button onClick={()=>navigate("/")}>Go back to Home page</button>
   </div>
  )
}

export default Login
