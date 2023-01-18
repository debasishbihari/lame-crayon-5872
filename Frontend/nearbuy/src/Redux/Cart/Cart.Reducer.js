
const initialState ={
    isLoading: false,
    isError:false,
    cart:[]
}

export const CartReducer = (state=initialState,{type,payload})=>{
    switch (type) { 
        default:{
            return state
        }
    }
}