import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { getCart } from "../Redux/Cart/Cart.action";
import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";

const Checkout = () => {
  // const [cart, setCart] = useState([])
  const dispatch = useDispatch()

  // const navigate = useNavigate()

  const cart = useSelector((store)=> store.cartsManager)

  console.log(cart)
   useEffect(()=>{
    dispatch(getCart())
   },[])

  const initialValue = 0;
  const totalPrice = cart.cart.reduce(
  (accumulator, currentValue) => accumulator.price + currentValue
);

console.log(initialValue, totalPrice)

   if(cart.isLoading){
    <h1>...Loading</h1>
   }
  return (
    <>
      <div style={{
        display: "flex",
        marginTop:"80px",
        border:"2px solid blue",
        backgroundColor: "rgb(215, 225, 233)"}}>
        <div style={{width:"600px",height:"700px",marginTop:"50px",marginLeft: "20px"}}>
            <div ><h2 style={{ marginLeft:"1%",fontSize:"25px" }}>Order summary</h2>
          {cart.cart.map((el)=>(               
               <div key={el.id} style={{
                width: "85%",
                // border: "2px solid red",
                height: "150px",
                marginLeft: "20px",
                backgroundColor: "white"

            }}>
            <hr />
        
            <div style={{display:"flex", marginTop:"20px", justifyContent:"space-between", alignItems:"center"}}>
              <div>
                <img style={{width:"200px"}} src={el.img} alt="img" />
              </div>
                <div>
                  <h2 style={{fontSize:"19px"}}>{el.name}</h2>
                  <p style={{fontSize:"15px",marginTop:"10px"}}>{el.address}</p>
                  <h2 style={{fontSize:"15px",marginTop:"10px"}}>Price: ₹{el.price}</h2>
                </div>
              <hr />
            </div>
        </div>       
    
          
            ))
          }
          </div>
          <div
            style={{
              width: "85%",
              border: "1px solid whitesmoke",
              height: "200px",
              marginTop: "40px",
              marginLeft: "20px",
              backgroundColor: "white",
              display:"flex",
              justifyContent:"space-around"
            }}
          >
            <p style={{marginTop:"20px"}}>Subtotal: (Qty.) {cart.cart.length}</p> 
            <h2 style={{marginLeft:"150px", marginTop:"20px"}}>Total :</h2>  
            <hr />
          </div>
        </div>
        
        <div style={{ width: "60%", marginTop: "70px"}}>
        <h2 style={{marginLeft:"-680px", fontSize:"18px", marginBottom:"20px"}}>Payment Details</h2>
          <div
            style={{
              display: "flex",
              height: "500px"
            }}
          >
            <div style={{ height: "208px" }}>
              <button style={{ 
                width: "120px",
                fontSize:"14px",
                height:"50px",
                color:"red",
                backgroundColor:"white",
                border:"1px solid whitesmoke" }}>Paytm</button>
              <br />
              <button
                style={{ 
                    width: "120px",
                    fontSize:"14px",
                    height:"50px",
                    marginTop:"2px",
                    border:"1px solid whitesmoke"  }}
              >
                Credit Cards
              </button>
              <br />
              <button
                style={{ 
                    width: "120px",
                    fontSize:"14px", 
                    height:"50px",
                    marginTop:"2px",
                    border:"1px solid whitesmoke"}}
              >
                Debit Cards
              </button>
              <br />
              <button
                style={{ 
                    width: "120px",
                    fontSize:"14px", 
                    height:"50px",
                    marginTop:"2px",
                    border:"1px solid whitesmoke"}}
              >
                Net Banking
              </button>
              <br />
            </div>

            <div
              style={{
                border: "1px solid whitesmoke",
                width: "80%",
                height: "500px",
                backgroundColor: "white"
              }}
            >
              <h3 style={{marginLeft:"-500px", marginTop:"10px"}}>Select a wallet</h3>
              <button style={{marginLeft:"-480px"}}>
                <img
                  style={{ width:"120px",border:"2px solid red", marginTop:"20px" }}
                  src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.png"
                  alt="patym"
                />
              </button>
              <br />
              <button
                onClick={() =>
                  alert("Congratulation.. Your order has been placed")
                }
                style={{
                  height: "30px",
                  marginTop: "20px",
                  backgroundColor: "red",
                  marginLeft:"-500px",
                  width:"80px",
                  color:"white"
                }}
              >
                PAY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
