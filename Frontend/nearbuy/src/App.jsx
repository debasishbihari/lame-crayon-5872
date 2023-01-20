import { Container } from '@chakra-ui/react'
import { useState } from 'react'

import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Router from './Routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxW='100%' minH='100vh' margin='0px' marginTop="0" textAlign='center' padding='0px'  border="5px solid red">
     <Navbar/>
     <Router/>
     <Footer/>
    </Container>
  )
}

export default App
