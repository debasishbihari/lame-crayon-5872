import React, { useEffect, useState } from 'react'

import {useDispatch, useSelector} from "react-redux"

import "./Cart.css"
import { useNavigate } from 'react-router-dom'
import { getCart, removeCart } from '../Redux/Cart/Cart.action'


const Cart = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector((store)=> store.cartsManager.cart)

  const deleteItem = (id)=>{
    dispatch(getCart())
    dispatch(removeCart(id))  
  }

  const checkout =()=>{
    navigate("/checkout")
  }

  useEffect(()=>{
    dispatch(getCart())
   },[])

  // console.log("cart",cart)

  return (
    <>
      <div style={{marginTop:"80px"}}>         
          <h1 className='heading'>Cart Page</h1>
            {
              cart?.map((el)=>(
                <div className='cart-div' key={el.id}>
                  <img style={{width:"50%", marginLeft:"-100px"}} src={el.img} alt="" />
                  <div className='data-div'>
                    <h1 style={{fontSize:"25px",marginTop:"10px"}}>{el.name}</h1>
                    <p style={{fontSize:"15px",marginTop:"10px"}}>Bought {el.bCount}</p>               
                    <p style={{fontSize:"15px",marginTop:"10px"}}>{el.desc}</p>
                    <h1 style={{fontSize:"20px",marginTop:"10px"}}>Price : ₹{el.price}</h1>
                    <button onClick={()=>deleteItem(el.id)} className='button'>Remove</button>
                  </div>             
                </div>
              ))
            }
          <div>
            <button onClick={checkout} className='checkout'>Checkout</button>
          </div>
      </div>
    </>
  )
}

export default Cart