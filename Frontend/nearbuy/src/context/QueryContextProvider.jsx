import React, { useState } from 'react'
const queryContext=React.createContext();
const QueryContextProvider = ({children}) => {
    const [query,setQuery]=useState("");
  return (
    <queryContext.Provider value={{query,setQuery}}>
      {children}
    </queryContext.Provider>
  )
}

export {queryContext, QueryContextProvider} ;