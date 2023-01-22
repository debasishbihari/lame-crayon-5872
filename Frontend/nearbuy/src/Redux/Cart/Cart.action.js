import axios from "axios";
import { GetCartItem } from "./Cart.api";
import { CART_CLEAN, GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCESS, REMOVE_CART } from "./Cart.type"
import { ADD_CART_ERROR, ADD_CART_LOADING, ADD_CART_SUCCESS } from "./Cart.type";



export const getCart = ()=> async(dispatch)=>{
    dispatch({ type: GET_CART_LOADING});
    try {
        let res= await GetCartItem();
        dispatch({ type:GET_CART_SUCCESS, payload: res})
        console.log("data",res)
    } catch (error) {
        dispatch({type:GET_CART_ERROR});
    };
};

export const addToCart=(data)=>async(dispatch)=>{
    dispatch({type:ADD_CART_LOADING});
    try {
        let res = await axios.post("https://nearbuy-mock-server.onrender.com/carts",data);
        dispatch({type:ADD_CART_SUCCESS , payload:res.data});
    } catch (error) {
        dispatch({type:ADD_CART_ERROR, payload:error.message});
    }
}

export const removeCart =(id)=>async(dispatch)=>{
    let res= await axios.delete(`https://nearbuy-mock-server.onrender.com/carts/${id}`)
    // let data= res.data
    // // console.log(data)
    dispatch({type:REMOVE_CART, payload:res.data})
    
}


export const clearCart = ()=>async(dispatch)=>{
    dispatch({type:CART_CLEAN, payload:[]})
}