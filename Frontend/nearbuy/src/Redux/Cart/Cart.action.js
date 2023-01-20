
import { GetCartItem } from "./Cart.api";
import { GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCESS } from "./Cart.type"


export const getCart = ()=> async(dispatch)=>{
    dispatch({ type: GET_CART_LOADING});
    try {
        let res= await GetCartItem();
        dispatch({ type:GET_CART_SUCCESS, payload: res.data})
        console.log("data",res.data)
    } catch (error) {
        dispatch({type:GET_CART_ERROR});
    };
};

import axios from "axios";
import { ADD_CART_ERROR, ADD_CART_LOADING, ADD_CART_SUCCESS } from "./Cart.type";


export const addToCart=(data)=>async(dispatch)=>{
    dispatch({type:ADD_CART_LOADING});
    try {
        let res = await axios.post("https://nearbuy-mock-server.onrender.com/carts",data);
        dispatch({type:ADD_CART_SUCCESS , payload:res.data});
    } catch (error) {
        dispatch({type:ADD_CART_ERROR, payload:error.message});
    }
}

