

import axios from "axios";
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./Products.type";

export const getProducts=(url)=>async (dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
    try {
      
        const res=await axios.get(url);

        dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data});
    } catch (error) {
        dispatch({type:GET_PRODUCTS_ERROR,payload:error.message});
    }
}