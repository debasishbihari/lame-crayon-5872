
import { GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCESS, REMOVE_CART } from "./Cart.type"

import { ADD_CART_ERROR, ADD_CART_LOADING, ADD_CART_SUCCESS } from "./Cart.type"


const initialState ={
    isLoading: false,
    isError:false,

    data:[]

    isAdded:false,
    cart:[]

}

export const CartReducer = (state=initialState,{type,payload})=>{
    switch (type) { 

        case GET_CART_LOADING:{
            return{
                ...state,
                isLoading: true
            }
        }
        case GET_CART_ERROR:{
            return{
                ...state,
                isLoading:false,
                isError: true
            }
        }
        case GET_CART_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                data:payload
            }
        }
        case REMOVE_CART:{
            return{
                ...state,
                cart: state.data.filter((item)=> item!= payload)
            }
        }

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
