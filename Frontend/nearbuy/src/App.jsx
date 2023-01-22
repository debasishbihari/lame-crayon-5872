import { Container } from '@chakra-ui/react'

import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Router from './Routes/AllRoutes'

function App() {

  return (
    
    <Container maxW='100%'  margin='0px' textAlign='center' border=".5px solid green"  >
      <Navbar/>
     {/* <Navbar/> */}
     <Router/>
     <Footer/>
    </Container>
    
  )
}

export default App
