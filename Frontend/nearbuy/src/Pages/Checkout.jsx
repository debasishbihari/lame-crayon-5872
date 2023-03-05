import React, {useContext, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { clearCart, getCart } from "../Redux/Cart/Cart.action";
import { useSelector } from "react-redux";
import {  useToast } from "@chakra-ui/react";
import Skeleton from "../components/Skeleton";
import styles from "../Pages/Checkout.module.css";
import WalletMethod from "../components/WalletMethod";
import { otpContext } from "../context/OtpContextProvider";
import OrderSuccess from "../components/OrderSuccess";
const Checkout = () => {
  const dispatch = useDispatch();
  const{isOtpRight}=useContext(otpContext);
  const toast=useToast();
  const {cart, isLoading} = useSelector((store)=> store.cartsManager)
  const paymentLogos=[
    { id:1,
      src:"https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.png",
      alt:"paytm"
    },{id:2,
      src:"https://static.vecteezy.com/system/resources/previews/009/911/500/original/google-pay-editorial-logo-digital-payment-app-free-vector.jpg",alt:"google-pay"
    },
    {
      id:3,
      src:"https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png",alt:"phonepe"
    }
  ]
  const [selected,setSelected]=useState(0);
  const handlePayment=(id)=>{
    setSelected(id);

  }
  const deleteAllCart = ()=>{
    dispatch(clearCart())
    if(cart.length==0){
      // alert("You dont have any item in your cart")
      toast({
        position:"top",
        title: 'Cart is empty.',
        description: "You dont have any item in your cart.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }else{
      // alert("Congratulations.. your order has been placed")
      toast({
        position:"top",
        title: 'Success.',
        description: "Congratulations.. your order has been placed.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    }
    
  }

  console.log(cart)
   useEffect(()=>{
    dispatch(getCart())
   },[])

  const initialValue = 0;
  const totalPrice = cart.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price, initialValue
);

// console.log(initialValue, totalPrice);

if(isOtpRight){
  return <OrderSuccess/>
}

if (isLoading) {
  return  <Skeleton />
}
  return (
    <>
    
      <div className={styles.checkout_main} >  {/* flex-->checkoutPage Main-div  */}  

        <div className={styles.leftContainer} >
        <h2 style={{fontSize:"25px" }}>Order summary</h2>
            <div className={styles.cartDataMain}>
          {cart.map((el)=>(               
            //    <div  key={el.id} style={{
            //     width: "85%",
                
            //     marginLeft: "20px",
            //     backgroundColor: "white"

            // }}>
            
        
            <div className={styles.cartDataChild} key={el.id}>
              
                <div className={styles.Cart_Detail_Div}>
                <img style={{width:"auto"}} src={el.img} alt="img" />
                </div>
              
                <div className={styles.Cart_Detail_Div}>
                  <h2 style={{fontSize:"19px","textAlign":"center"}} >{el.name}</h2>
                  <p style={{fontSize:"15px",marginTop:"10px","textAlign":"center"}}>{el.address}</p>
                  <h2 style={{fontSize:"15px",marginTop:"10px","textAlign":"center"}}>Price: ₹{el.price}</h2>
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
              justifyContent:"space-around",
              flexDirection:"column"
            }}
          >
            <div style={{display:"flex", "justifyContent":"space-around"}}>
              <p style={{fontWeight:"700", fontSize:"18px"}}>Subtotal: (Qty.) {cart.length}</p> 
              <h2 style={{marginLeft:"150px", fontSize:"18px",fontWeight:"700"}}>₹ {totalPrice}</h2> 
            </div>             
            <div style={{border:"1px solid black"}}></div>
            <div>
              <h2 style={{ fontSize:"20px",fontWeight:"700"}}>Total Price: ₹ {totalPrice}</h2>
            </div>
          </div>
        </div>
        
        <div className={styles.rightContainer}>
        <h2 style={{fontSize:"25px",color:"teal" }}>Payment Details</h2>
          <div className={styles.payment_main_div}
            style={{
              display: "flex",
              height: "500px"
            }}
          >
            <div className={styles.payment_methods} >
              <button style={{ 
                width: "120px",
                fontSize:"14px",
                height:"50px",
                color:"red",
                backgroundColor:"white",
                border:"1px solid whitesmoke" }}>Wallets</button>
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

            <div className={styles.payment_cred}
             
            >
              <h3 style={{ marginTop:"10px",fontSize:"25px" }}>Select a wallet</h3>
              <div className={styles.wallets}>
                {
                  paymentLogos?.map((ele)=>{
                    return <div key={ele.id} style={selected===ele.id?{"border":"1px solid teal",borderRadius:"5px"}:null}>
                         <img src={ele.src} alt={ele.alt} onClick={()=>handlePayment(ele.id)}/>
                      </div>
                  })
                }
              </div>
              {
                selected===0?null:<WalletMethod/>
              }
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
