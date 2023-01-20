import axios from "axios"

export const GetCartItem = async()=>{
    let res = await axios.get("https://nearbuy-mock-server.onrender.com/carts")
    // console.log(res.data)
    return res.data
    
}