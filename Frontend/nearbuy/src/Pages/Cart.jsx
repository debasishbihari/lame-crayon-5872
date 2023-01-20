import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
// import {useSelector} from "react-redux"
// import Footer from '../components/Footer'
import axios from 'axios'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Cart = () => {
  const [cart, setCart] = useState([])
  const [item, setRemoveItem] = useState()
  const navigate = useNavigate()

   // const cart = useSelector((store)=> store.cartManager.data)
   const getData = async() =>{
    let res = await axios.get("https://nearbuy-mock-server.onrender.com/carts")
    // console.log("data",res.data)
     setCart(res.data)
   }

   const checkout =()=>{
      navigate("./checkout")
   }

   useEffect(()=>{
    getData(cart)
   },[])

  // console.log("cart",cart)

  return (
    <>
    
      <Navbar />
      <div>
          
          <h1  className='heading'>Cart Page</h1>
         
            {
              cart.map((el)=>(
                <div className='cart-div' key={el.id}>
                  <img style={{width:"50%", marginLeft:"-100px"}} src={el.img} alt="" />
                  <div className='data-div'>
                    <h1 style={{fontSize:"25px",marginTop:"10px"}}>{el.name}</h1>
                    <p style={{fontSize:"15px",marginTop:"10px"}}>Bought {el.bCount}</p>               
                    <p style={{fontSize:"15px",marginTop:"10px"}}>{el.desc}</p>
                    <h1 style={{fontSize:"20px",marginTop:"10px"}}>Price : ₹{el.price}</h1>
                    <button className='button'>Remove</button>
                  </div>             
                </div>
              ))
            }
          <div>
            <button onClick={checkout} className='checkout'>Checkout</button>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart