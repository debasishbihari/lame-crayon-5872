import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import WorkSpace from "../Pages/WorkSpace"
import Inventory from "../Pages/Inventory"

const AllRoutes = ()=>{
    return (
        <>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/workspace" element={<WorkSpace/>}/>
            <Route path="/inventory" element={<Inventory/>} />
         </Routes>
        </>
    )
}
export default AllRoutes;