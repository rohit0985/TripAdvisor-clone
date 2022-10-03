import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Hotel from "../Pages/Hotel"
import Login from "../Pages/Login"
import Cart from "../Pages/Cart"

const AllRoutes = ()=> {

return(
    <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/hotel" element={<Hotel/>}>Hotel</Route>
        <Route path="/login" element={<Login/>}>Login</Route>
        <Route path="/cart" element={<Cart/>}>Cart</Route>
    </Routes>
)
}
export default AllRoutes