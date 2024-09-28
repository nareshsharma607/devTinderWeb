import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
function Body() {
  return (
    <div>
  <Navbar></Navbar>
    <Outlet/>
    </div>
  
  )
}

export default Body