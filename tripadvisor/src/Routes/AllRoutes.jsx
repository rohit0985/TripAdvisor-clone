import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Hotel from "../Pages/Hotel"

const AllRoutes = ()=> {

return(
    <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/hotel" element={<Hotel/>}>Hotel</Route>
    </Routes>
)
}
export default AllRoutes