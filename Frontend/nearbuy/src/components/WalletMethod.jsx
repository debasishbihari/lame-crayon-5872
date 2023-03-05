import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Input, InputGroup, InputLeftAddon, useToast } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { otpContext } from '../context/OtpContextProvider';
import OrderSuccess from './OrderSuccess';

const WalletMethod = () => {
    const [numb,setNumb]=useState("");
    const{isOtpRight,setIsOtpRight}=useContext(otpContext);
    const toast=useToast();
    const [isOtp,setIsOtp]=useState(false);
    const[otp,setOtp]=useState("");
    const otpp=1234;
    const handleNumber=(e)=>{
         setNumb(e.target.value);
    }
    const takeOtp=(e)=>{
        setOtp(e.target.value);
    }
    const handleOtp=()=>{
        if(numb===""){
            toast({
                title: 'Invalid Number',
                description: "Please enter a valid number ",
                status: 'error',
                duration: 2000,
                isClosable: true,
                position:"top"
              })
        }else{
            setIsOtp(true);
        }
    }
    const verifyOtp=()=>{
         if(otp!=otpp){
            toast({
                title: 'Invalid Otp',
                description: "Please enter a valid Otp ",
                status: 'error',
                duration: 2000,
                isClosable: true,
                position:"top"
              });
              
         }else{
             setIsOtpRight(true);
            
         }
    }
    // console.log(numb)
  return (
    !isOtp?<div className="payment_input">
    <InputGroup >
<InputLeftAddon children='+91' backgroundColor={"skyblue"}/>
<Input type='text' placeholder='phone number' pattern={"[6-9]{1}[0-9]{9}"} maxLength={10} onChange={()=>handleNumber(event)}/>
</InputGroup> 
<Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid' onClick={handleOtp}>
Get Otp
</Button>
</div>:<div className='payment_input'>
    <InputGroup >

<Input type='text' placeholder='Enter the 4 digit Otp'  maxLength={4} onChange={()=>takeOtp(event)}/>
</InputGroup> 
<Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid' onClick={verifyOtp}>
Verify & Pay
</Button>
</div>

  )
}

export default WalletMethod