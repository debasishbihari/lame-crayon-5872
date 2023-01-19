import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="main">
        <div className="left-box">
          <div
            style={{
              width: "85%",
              border: "2px solid whitesmoke",
              height: "200px",
              marginTop: "20px",
              marginLeft: "20px",
              backgroundColor: "white"
            }}
          >
            <h2 style={{ marginLeft:"12%" }}>Order summary</h2>
            <hr />
          </div>
          <div
            style={{
              width: "85%",
              border: "1px solid whitesmoke",
              height: "200px",
              marginTop: "60px",
              marginLeft: "20px",
              backgroundColor: "white"
            }}
          >
            <p>Subtotal (qty. 1)</p>
            <hr />
            <p>Convenience Fees</p>
          </div>
        </div>
        
        <div style={{ width: "60%", marginTop: "150px"}}>
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
