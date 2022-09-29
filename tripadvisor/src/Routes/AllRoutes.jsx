import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"

const AllRoutes = ()=> {

return(
    <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
    </Routes>
)
}
export default AllRoutes