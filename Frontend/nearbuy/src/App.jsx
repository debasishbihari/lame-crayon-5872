import { Container } from '@chakra-ui/react'
import { useState } from 'react'

import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './Pages/Products'
import Router from './Routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Container maxW='100%'  margin='0px' marginTop="0" textAlign='center' padding='0px'  >
     {/* <Navbar/> */}
     <Router/>
     {/* <Footer/> */}
    </Container>
    
  )
}

export default App
