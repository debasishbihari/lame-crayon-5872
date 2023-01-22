import { Container } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Card, CardBody, Stack, Heading, Image } from '@chakra-ui/react'
import Bigcarousel from '../components/Carousel'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Text, SimpleGrid } from '@chakra-ui/react';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  Box,
  Center
} from '@chakra-ui/react';


const Home = () => {

  const [newdata, setData] = useState()


  useEffect(() => {
    axios
      .get("https://nearbuy-mock-server.onrender.com/products")
      .then(data => setData(data.data)
      )
      .catch(error => {
        console.log(error)
      });

  }, [])

  console.log("a", newdata)



  const navigate = useNavigate();

  const handleDeals = (e) => {
    let val = e.target.innerText;
    if (val === "Restaurant Deals" || val === "Buffet Deals") {
      localStorage.setItem("typeFilter", "Restaurant Deals");
      localStorage.setItem("actualType", val);
    }
    else if (val === "Salon Deals" || val === "Spa Deals") {
      localStorage.setItem("typeFilter", "Salon Deals");
      localStorage.setItem("actualType", val);
    }
    else {
      localStorage.setItem("typeFilter", val);
      localStorage.setItem("actualType", val);
    }

    navigate("/products")

  }

  const cards = [
    'https://img4.nbstatic.in/tr:w-2800/63c90b038db992000bee9614.jpg',
    'https://img4.nbstatic.in/tr:w-2800/63b3af1e22b317000c1336a8.jpg'
  ];

  const cards1 = [
    'https://img4.nbstatic.in/tr:w-2800/627b4e0db3c621000b5f5e77.jpg',
    'https://img4.nbstatic.in/tr:w-2800/627b4e163b031b000b774d60.jpg'
  ];

  const images = [
    "https://img4.nbstatic.in/tr:w-350/61fbad7a3b031b000bd5c0df.jpeg",
    "https://img4.nbstatic.in/tr:w-350/61fbad0d6f487a000bf5658c.jpeg",
    "https://img4.nbstatic.in/tr:w-350/61fbad613b031b000bd5c0de.jpeg"
  ]

  const promo = [
    "https://img4.nbstatic.in/tr:w-700/6299bae13b031b000ba75db4.jpeg",
    "https://img4.nbstatic.in/tr:w-700/6294bbe1b3c621000b366b85.jpeg",
    "https://img4.nbstatic.in/tr:w-700/636039fc22156b000cb5df05.jpeg"
  ]


  return (
    <Container maxW="100%" marginTop="81px">
      <Container
        maxW="full"
        display="flex"

        gap={"5px"}
        maxH="100px"
        boxShadow="base"
        >

        <Container
          maxW="65%"
          margin="auto"
          display="flex"

          gap="4px"
          maxH="80px"
        >

          <Center py={3}>
            <Box
              maxW={'100%'}
              maxH="fit-content"
              w={'full'}
              bg="transparent"
              p={1}
              justifyContent="center"
              alignItems="center"
              _hover={{ boxShadow: '1px 1px 2px grey', bg: "rgb(208,208,208)" }}
              overflow={'hidden'}
              onClick={handleDeals}>
              <Box
                h={'50px'}
                ml="30%"
                pos={'relative'}>
                <Image
                  src={
                    'https://img4.nbstatic.in/tr:w-/60af2a061e2731000ba1096a.png'
                  }
                  layout={'fill'}
                  maxH="70%"
                />
              </Box>
              <Stack

                mb="0px">

                <Heading
                  fontSize={'12px'}
                  fontFamily={'body'}>
                  Restaurant Deals
                </Heading>

              </Stack>
            </Box>
          </Center>

          <Center py={3}>
            <Box
              maxW={'100%'}
              maxH="fit-content"
              w={'full'}
              bg="transparent"
              p={1}
              pl="15px"
              pr="15px"
              justifyContent="center"
              alignItems="center"
              _hover={{ boxShadow: '1px 1px 2px grey', bg: "rgb(208,208,208)" }}
              overflow={'hidden'}
              onClick={handleDeals}>
              <Box
                h={'50px'}
                ml="30%"
                pos={'relative'}>
                <Image
                  src={
                    'https://img4.nbstatic.in/tr:w-/639acd9b8db992000bac8a46.png'
                  }
                  layout={'fill'}
                  maxH="70%"
                />
              </Box>
              <Stack

                mb="0px">

                <Heading
                  fontSize={'12px'}
                  fontFamily={'body'}>
                  Buffet Deals
                </Heading>

              </Stack>
            </Box>
          </Center>

          <Center py={3}>
            <Box
              maxW={'fit-content'}
              maxH="fit-content"
              w={'full'}
              bg="transparent"
              p={1}
              justifyContent="center"
              alignItems="center"
              pl="15px"
              pr="15px"
              _hover={{ boxShadow: '1px 1px 2px grey', bg: "rgb(208,208,208)" }}
              overflow={'hidden'}
              onClick={handleDeals}>
              <Box
                h={'50px'}
                ml="30%"
                pos={'relative'}>
                <Image
                  src={
                    'https://img4.nbstatic.in/tr:w-/60ac96c840e9df000b6cbf94.png'
                  }
                  layout={'fill'}
                  maxH="70%"
                />
              </Box>
              <Stack

                mb="0px">

                <Heading
                  fontSize={'12px'}
                  fontFamily={'body'}>
                  Salon Deals
                </Heading>

              </Stack>
            </Box>
          </Center>

          <Center py={3}>
            <Box
              maxW={'fit-content'}
              maxH="fit-content"
              w={'full'}
              bg="transparent"
              p={1}
              justifyContent="center"
              alignItems="center"
              pl="15px"
              pr="25px"
              _hover={{ boxShadow: '1px 1px 2px grey', bg: "rgb(208,208,208)" }}
              overflow={'hidden'}
              onClick={handleDeals}>
              <Box
                h={'50px'}
                ml="30%"
                pos={'relative'}>
                <Image
                  src={
                    'https://img4.nbstatic.in/tr:w-/60ac96e240e9df000b6cbf95.png'
                  }
                  layout={'fill'}
                  maxH="70%"
                />
              </Box>
              <Stack

                mb="0px">

                <Heading
                  fontSize={'12px'}
                  fontFamily={'body'}>
                  Spa Deals
                </Heading>

              </Stack>
            </Box>
          </Center>

          <Center py={3}>
            <Box
              maxW={'fit-content'}
              maxH="fit-content"
              w={'full'}
              bg="transparent"
              p={1}
              justifyContent="center"
              alignItems="center"
              pl="5px"
              pr="5px"
              _hover={{ boxShadow: '1px 1px 2px grey', bg: "rgb(208,208,208)" }}
              overflow={'hidden'}
              onClick={handleDeals}>
              <Box
                h={'50px'}
                ml="30%"
                pos={'relative'}>
                <Image
                  src={
                    'https://img4.nbstatic.in/tr:w-/6201ec623b031b000b53e5b6.png'
                  }
                  layout={'fill'}
                  maxH="70%"
                />
              </Box>
              <Stack

                mb="0px">

                <Heading
                  fontSize={'12px'}
                  fontFamily={'body'}>
                  Activities Deals
                </Heading>

              </Stack>
            </Box>
          </Center>

          <Center py={3}>
            <Box
              maxW={'fit-content'}
              maxH="fit-content"
              w={'full'}
              bg="transparent"
              p={1}
              justifyContent="center"
              alignItems="center"
              pl="20px"
              pr="20px"
              _hover={{ boxShadow: '1px 1px 2px grey', bg: "rgb(208,208,208)" }}
              overflow={'hidden'}
              onClick={handleDeals}>
              <Box
                h={'50px'}
                ml="30%"
                pos={'relative'}>
                <Image
                  src={
                    'https://img4.nbstatic.in/tr:w-/62d67522edffcc000b060b5c.png'
                  }
                  layout={'fill'}
                  maxH="70%"
                />
              </Box>
              <Stack

                mb="0px">

                <Heading
                  fontSize={'12px'}
                  fontFamily={'body'}>
                  Gift Cards
                </Heading>

              </Stack>
            </Box>
          </Center>

          <Center py={3}>
            <Box
              maxW={'fit-content'}
              maxH="fit-content"
              w={'full'}
              bg="transparent"
              p={2}
              justifyContent="center"
              alignItems="center"
              pl="30px"
              pr="30px"
              _hover={{ boxShadow: '1px 1px 2px grey', bg: "rgb(208,208,208)" }}
              overflow={'hidden'}
              onClick={handleDeals}>
              <Box
                h={'50px'}
                ml="30%"
                pos={'relative'}>
                <Image
                  src={
                    'https://img4.nbstatic.in/tr:w-/62d6747fb3c621000b6fb633.png'
                  }
                  layout={'fill'}
                  maxH="70%"
                />
              </Box>
              <Stack

                mb="0px">

                <Heading
                  fontSize={'12px'}
                  fontFamily={'body'}>
                  Gift Cards
                </Heading>

              </Stack>

          <Card maxW="35%"
            justifyContent="center"
            bg="transparent"
            _hover={{ color: "red", transform: "scale(1.06)", overflow: "hidden" }} onClick={handleDeals}>
            <CardBody
              justifyContent="center">
              <Image
                src='https://img4.nbstatic.in/tr:w-/60af2a061e2731000ba1096a.png'
                alt='hgg'
                borderRadius='md'
                ml="15px"
                mt="20px"
                maxW="35%"
                maxH="35%"
              />
              <Stack mt='3' spacing='2'>
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
                mt="20px"
                maxW="35%"
                maxH="35%"
              />
              <Stack mt='3' spacing='2'>
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
                mt="20px"
                maxW="35%"
                maxH="35%"
              />
              <Stack mt='3' spacing='2'>
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
                mt="20px"
                maxW="35%"
                maxH="35%"
              />
              <Stack mt='3' spacing='2'>
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
                mt="20px"
                maxW="35%"
                maxH="35%"
              />
              <Stack mt='3' spacing='2'>
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
                mt="20px"
                maxW="35%"
                maxH="35%"
              />
              <Stack mt='3' spacing='2'>
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
                mt="20px"
                maxW="35%"
                maxH="35%"
              />
              <Stack mt='3' spacing='2'>
                <Heading size='md'>Health</Heading>


              </Stack>
            </CardBody>
          </Card>
            </Box>
          </Center>
        </Container>

     </Container>


      <Container maxW="100%" marginTop="20px" maxH="200px" >
        <Bigcarousel cards={cards} />
      </Container>



      {/* imageSlider */}

      <Container maxW="60%" marginTop="20px" display={["flex"]}>
        <Carousel infiniteLoop>
          {newdata?.map((el) => {
            return <Image src={el.img} height="100px" width="200px" key={el.id} />;
          })}
        </Carousel>
      </Container>


      {/* Buffet heading */}

      <Container maxW="60%" margin={"auto"} marginTop="20px">
        <Text fontWeight="900" textAlign="left" fontSize="2xl">Everything Buffet</Text>
      </Container>

      <Container maxW="60%" margin="auto" marginTop="20px" display="flex" gap="20px" >
        <Image src='https://img4.nbstatic.in/tr:w-350/63285c2fc10843000be89e59.jpg' alt="buffe" maxW="200px" maxH="100px" />
        <Image src='https://img4.nbstatic.in/tr:w-350/63285c40c10843000be89e5a.jpg' alt="buffe" maxW="200px" maxH="100px" />
      </Container>


      {/* second carousel */}

      <Container maxW="100%" marginTop="20px" >
        <Bigcarousel cards={cards1} />
      </Container>


      {/* second heading */}

      <Container maxW="60%" margin={"auto"} marginTop="20px">
        <Text fontWeight="900" textAlign="left" fontSize="2xl">New On NearBuy</Text>
      </Container>

      <Container maxW="100%" marginTop="20px" >
        <Bigcarousel cards={cards} />
      </Container>

      {/* Third heading */}

      <Container maxW="60%" margin={"auto"} marginTop="20px">
        <Text fontWeight="900" textAlign="left" fontSize="2xl">Quick Bites</Text>
      </Container>

      <Container maxW="100%" marginTop="50px" >
        <Bigcarousel cards={cards} />
      </Container>

      {/* next on your mind heading */}

      <Container maxW="60%" margin={"auto"} marginTop="20px">
        <Text fontWeight="900" textAlign="left" fontSize="2xl">Next Thing On Your Mind</Text>
      </Container>

      <Container maxW="60%"  margin="auto" marginTop="10px" >
      <SimpleGrid columns={[1, 2, 3, 4, 5, 6, 7]} spacing={5}>
          {images.map((img, index) =>
          <Card key={index}
          
          _hover={{boxShadow:'5px 5px 20px grey'}}>
               <Image  src={img} maxW="150px" maxH={"200px"} borderRadius="20px" />
          </Card>
           )}
        </SimpleGrid>
      </Container>

      



      {/* Salon heading */}

      <Container maxW="60%" margin={"auto"} marginTop="20px">
        <Text fontWeight="900" textAlign="left" fontSize="2xl">Popular Salon Services</Text>
      </Container>
   
      <Container maxW="60%" margin="auto" marginTop="10px" >
        <SimpleGrid columns={[1, 2, 3, 4, 5, 6, 7]} spacing={5}>
          {newdata?.filter((el) => el.typeFilter== "Salon Deals").map((el)=>
          <Card key={el.id}
          _hover={{boxShadow:'5px 5px 20px grey'}}>
               <Image  src={el.photos[1]} maxW="150px" maxH={"200px"}  borderRadius="5px"/>
               <Text fontSize={"10px"} textAlign="left" margin={"5px"}>{el.desc}</Text>
          </Card>
          ) }
        </SimpleGrid>
      </Container>


        {/* Relaxing heading */}

      <Container maxW="60%" margin={"auto"} marginTop="20px">
        <Text fontWeight="900" textAlign="left" fontSize="2xl">Relaxing Massages</Text>
      </Container>
   
      <Container maxW="60%" margin="auto" marginTop="10px" >
        <SimpleGrid columns={[1, 2, 3, 4, 5, 6, 7]} spacing={5}>
          {newdata?.filter((el) => el.typeFilter== "Health").map((el)=>
          <Card key={el.id}
          _hover={{boxShadow:'5px 5px 20px grey'}}>
               <Image  src={el.photos[1]} maxW="150px" maxH={"200px"}  borderRadius="5px"/>
               <Text fontSize={"10px"} textAlign="left" margin={"5px"}>{el.desc}</Text>
          </Card>
          ) }
        </SimpleGrid>
      </Container>
      



      {/* next on your mind heading */}

      <Container maxW="60%" margin={"auto"} marginTop="20px">
        <Text fontWeight="900" textAlign="left" fontSize="2xl">Promo Codes For More Savings</Text>
      </Container>

      <Container maxW="60%"  margin="auto" marginTop="10px" >
      <SimpleGrid columns={[1, 2, 3]} spacing={5}>
          {promo.map((img, index) =>
          <Card key={index}
          >
               <Image  src={img} maxW="300px"  maxH={"150px"} borderRadius="20px" />
               <Text fontSize={"10px"} textAlign="left" margin={"5px"}>Valid till 2feb 2023</Text>
          </Card>
           )}
        </SimpleGrid>
      </Container>

    

    </Container>  
  )
}

export default Home;
