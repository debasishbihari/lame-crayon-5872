import { ADD_CART_ERROR, ADD_CART_LOADING, ADD_CART_SUCCESS } from "./Cart.type"

const initialState ={
    isLoading: false,
    isError:false,
    isAdded:false,
    cart:[]
}

export const CartReducer = (state=initialState,{type,payload})=>{
    switch (type) { 
          case ADD_CART_LOADING:{
            return{
                ...state,
                isLoading:true,
                isError:false,
                isAdded:false
            }
          }
          case ADD_CART_SUCCESS:{
            return {
                ...state,
                cart:[...state.cart,payload],
                isLoading:false,
                isAdded:true,
                isError:false
            }
          }

          case ADD_CART_ERROR:{
            return {
                ...state,
                isError:payload,
                isLoading:false,
                isAdded:false
            }
          }

        default:{
            return {
                ...state
            }
        }
    }
}