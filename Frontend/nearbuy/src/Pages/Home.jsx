import { Container } from '@chakra-ui/react'
import React from 'react'
import { Card, CardBody, Stack, Heading, Image } from '@chakra-ui/react'

const Home = () => {
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
          maxH="150px"
          border="1px solid black">

          <Card maxW="35%"
            justifyContent="center"
            bg="transparent"
            _hover={{ color: "red", transform: "scale(1.06)", overflow: "hidden" }}>
            <CardBody
              justifyContent="center">
              <Image
                src='https://img4.nbstatic.in/tr:w-/60af2a061e2731000ba1096a.png'
                alt='hgg'
                borderRadius='lg'
                ml="15px"
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Resturant Deals</Heading>

              </Stack>
            </CardBody>
          </Card>

          <Card maxW="35%"
            justifyContent="center"
            _hover={{ color: "red", transform: "scale(1.06)", overflow: "hidden" }}>
            <CardBody
              justifyContent="center">
              <Image
                src='https://img4.nbstatic.in/tr:w-/639acd9b8db992000bac8a46.png'
                alt='hgg'
                borderRadius='lg'
                ml="15px"
                maxW="60%"
                maxH="70%"
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Buffet Deals</Heading>

              </Stack>
            </CardBody>
          </Card>

          <Card maxW="35%"
            justifyContent="center"
            _hover={{ color: "red", transform: "scale(1.06)", overflow: "hidden" }}>
            <CardBody
              justifyContent="center">
              <Image
                src='https://img4.nbstatic.in/tr:w-/60ac96c840e9df000b6cbf94.png'
                alt='hgg'
                borderRadius='lg'
                ml="15px"
                maxW="70%"
                maxH="70%"
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Salon Deals</Heading>

              </Stack>
            </CardBody>
          </Card>

          <Card maxW="35%"
            justifyContent="center"
            _hover={{ color: "red", transform: "scale(1.06)", overflow: "hidden" }}>
            <CardBody
              justifyContent="center">
              <Image
                src='https://img4.nbstatic.in/tr:w-/60ac96e240e9df000b6cbf95.png'
                alt='hgg'
                borderRadius='lg'
                ml="15px"
                maxW="90%"
                maxH="70%"
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Spa Deals</Heading>

              </Stack>
            </CardBody>
          </Card>

          <Card maxW="30%"
            justifyContent="center"
            _hover={{ color: "red", transform: "scale(1.06)", overflow: "hidden" }}>
            <CardBody
              justifyContent="center">
              <Image
                src='https://img4.nbstatic.in/tr:w-/6201ec623b031b000b53e5b6.png'
                alt='hgg'
                borderRadius='lg'
                ml="15px"
                maxW="70%"
                maxH="70%"
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Activities Deals</Heading>

              </Stack>
            </CardBody>
          </Card>

          <Card maxW="12%"
            justifyContent="center"
            _hover={{ color: "red", transform: "scale(1.06)", overflow: "hidden" }}>
            <CardBody
              justifyContent="center">
              <Image
                src='https://img4.nbstatic.in/tr:w-/62d67522edffcc000b060b5c.png'
                alt='hgg'
                borderRadius='lg'
                ml="15px"
                maxW="60%"
                maxH="70%"
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Gift Cards</Heading>

              </Stack>
            </CardBody>
          </Card>

          <Card maxW="12%"
            justifyContent="center"
            _hover={{ color: "red", transform: "scale(1.06)", overflow: "hidden" }}>
            <CardBody
              justifyContent="center">
              <Image
                src='https://img4.nbstatic.in/tr:w-/62d6747fb3c621000b6fb633.png'
                alt='hgg'
                borderRadius='lg'
                ml="15px"
                maxW="60%"
                maxH="70%"
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Health</Heading>

              </Stack>
            </CardBody>
          </Card>

        </Container>

      </Container>
      Home
    </Container>
  )
}

export default Home
