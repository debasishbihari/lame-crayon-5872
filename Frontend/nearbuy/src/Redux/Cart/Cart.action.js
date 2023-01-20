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
