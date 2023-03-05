import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { getCart, removeCart } from "../Redux/Cart/Cart.action";
import Skeleton from "../components/Skeleton";
import { Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { FaShoppingBag } from "react-icons/fa";
import axios from "axios";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cart, isLoading } = useSelector((store) => store.cartsManager);

  const deleteItem = async(id) => {
    // dispatch(getCart());
    // dispatch(removeCart(id));
   await axios.delete(`https://nearbuy-mock-server.onrender.com/carts/${id}`) ;
    dispatch(getCart());
  };
  
  const checkout = () => {
    navigate("/checkout");
  };
  



  useEffect(() => {
    dispatch(getCart());
  }, []);

  const initialValue = 0;
  const totalPrice = cart.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price, initialValue
);

  console.log("cart", cart);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <>
      <h1 className="heading">Cart Page</h1>
      <div className="cart-parent" >
        <div className="cart_container">
        {cart?.map((el) => (
          <div className="cart-div" key={el.id}>
            <div>
              <img src={el.img} alt="" />
            </div>
            <div className="data-div">
              <strong>{el.name}</strong>
              <strong> ₹{el.price}</strong>
              <Button rightIcon={<DeleteIcon />} colorScheme="red" variant="outline" onClick={() => deleteItem(el.id)}>
                Remove
              </Button>
            </div>
          </div>
        ))}
        </div>
   <div className="payment_checkout">
        <h1><strong>Quantity : {cart.length}</strong></h1>
        <h1><strong>Total : {totalPrice}</strong></h1>
        <Button rightIcon={<FaShoppingBag/>} colorScheme='teal' variant='outline' onClick={checkout}>
    Checkout
  </Button>
   </div>
        
</div>
      {/* <div>
            <button onClick={checkout} className='checkout'>Checkout</button>
          </div> */}
    </>
  );
};

export default Cart;
