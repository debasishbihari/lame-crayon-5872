import { GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCESS, REMOVE_CART } from "./Cart.type"

const initialState ={
    isLoading: false,
    isError:false,
    data:[]
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
        default:{
            return state
        }
    }
}
