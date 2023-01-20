import { Container } from '@chakra-ui/react'
import React from 'react'
import { Card, CardBody, Stack, Heading, Image } from '@chakra-ui/react'
import Carousel from '../components/Carousel'
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();

  const handleDeals=(e)=>{
   let val=e.target.innerText;
   if(val==="Restaurant Deals" || val==="Buffet Deals" ){
    localStorage.setItem("typeFilter","Restaurant Deals");
    localStorage.setItem("actualType",val);
   }
   else if(val==="Salon Deals" || val==="Spa Deals"){
    localStorage.setItem("typeFilter","Salon Deals");
    localStorage.setItem("actualType",val);
   }
   else{
    localStorage.setItem("typeFilter",val);
    localStorage.setItem("actualType",val);
   }

   navigate("/products")
   
  }
  return (
    <Container maxW="100%" margin="auto" marginTop="125px" border="2px solid red">
      <Container maxW="100%"
        display="flex"
        maxH="150px"
        boxShadow="base">
        <Container
          maxW="80%"
          margin="auto"
          display="flex"
          gap="15px"
          maxH="150px">

          <Card maxW="35%"
            justifyContent="center"
            bg="transparent"
            _hover={{ color: "red", transform: "scale(1.06)", overflow: "hidden" }} onClick={handleDeals}>
            <CardBody
              justifyContent="center">
              <Image
                src='https://img4.nbstatic.in/tr:w-/60af2a061e2731000ba1096a.png'
                alt='hgg'
                borderRadius='lg'
                ml="15px"
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Restaurant Deals</Heading>

              </Stack>
            </CardBody>
          </Card>

          <Card maxW="35%"
            justifyContent="center"
            _hover={{ color: "red", transform: "scale(1.06)", overflow: "hidden" }} onClick={handleDeals}>
            <CardBody
              justifyContent="center">
              <Image
                src='https://img4.nbstatic.in/tr:w-/639acd9b8db992000bac8a46.png'
                alt='hgg'
                borderRadius='lg'
                ml="15px"
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Buffet Deals</Heading>

              </Stack>
            </CardBody>
          </Card>

          <Card maxW="35%"
            justifyContent="center"
            _hover={{ color: "red", transform: "scale(1.06)", overflow: "hidden" }} onClick={handleDeals}>
            <CardBody
              justifyContent="center">
              <Image
                src='https://img4.nbstatic.in/tr:w-/60ac96c840e9df000b6cbf94.png'
                alt='hgg'
                borderRadius='lg'
                ml="15px"
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Salon Deals</Heading>

              </Stack>
            </CardBody>
          </Card>

          <Card maxW="35%"
            justifyContent="center"
            _hover={{ color: "red", transform: "scale(1.06)", overflow: "hidden" }} onClick={handleDeals}>
            <CardBody
              justifyContent="center">
              <Image
                src='https://img4.nbstatic.in/tr:w-/60ac96e240e9df000b6cbf95.png'
                alt='hgg'
                borderRadius='lg'
                ml="15px"
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Spa Deals</Heading>

              </Stack>
            </CardBody>
          </Card>

          <Card maxW="35%"
            justifyContent="center"
            _hover={{ color: "red", transform: "scale(1.06)", overflow: "hidden" }} onClick={handleDeals}>
            <CardBody
              justifyContent="center">
              <Image
                src='https://img4.nbstatic.in/tr:w-/6201ec623b031b000b53e5b6.png'
                alt='hgg'
                borderRadius='lg'
                ml="15px"
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Activity Deals</Heading>

              </Stack>
            </CardBody>
          </Card>

          <Card maxW="12%"
            justifyContent="center"
            _hover={{ color: "red", transform: "scale(1.06)", overflow: "hidden" }} onClick={handleDeals}>
            <CardBody
              justifyContent="center">
              <Image
                src='https://img4.nbstatic.in/tr:w-/62d67522edffcc000b060b5c.png'
                alt='hgg'
                borderRadius='lg'
                ml="15px"
                maxW="60%"
                maxH="50%"
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Gift Cards</Heading>

              </Stack>
            </CardBody>
          </Card>

          <Card maxW="12%"
            justifyContent="center"
            _hover={{ color: "red", transform: "scale(1.06)", overflow: "hidden" }} onClick={handleDeals}>
            <CardBody
              justifyContent="center">
              <Image
                src='https://img4.nbstatic.in/tr:w-/62d6747fb3c621000b6fb633.png'
                alt='hgg'
                borderRadius='lg'
                ml="15px"
                maxW="60%"
                maxH="50%"
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Health</Heading>

              </Stack>
            </CardBody>
          </Card>

        </Container>

      </Container>


      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Carousel />
      </Container>

      
      

      Home
    </Container>
  )
}

export default Home
