import React, { useState } from 'react'
const otpContext=React.createContext();
const OtpContextProvider = ({children}) => {
    const [isOtpRight,setIsOtpRight]=useState(false);
  return (
    <otpContext.Provider value={{isOtpRight,setIsOtpRight}}>
      {children}
    </otpContext.Provider>
  )
}

export {otpContext, OtpContextProvider} ;