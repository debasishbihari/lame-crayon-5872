import { Container } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
import coverpic from "../assets/activitiesdealimages/coverpic.webp";

const ActivitiesDeal = () => {
  return (
    <Container maxW="90%" margin="auto"  marginTop="125px" border="2px solid red">
      <Container maxW="90%" maxH="250px" margin="auto" marginTop="30px">
      <Image
            rounded={'md'}
            alt={'product image'}
            src={coverpic}
            fit={'cover'}
            align={'center'}
            margin="auto"
            maxW='90%'
            h={{ base: '100%', sm: '150px', lg: '220px' }}
          />
      </Container>
      <Container maxW="fit-content" marginLeft="10%" marginTop="30px" justifyItems="left" >
        <h1 style={{fontSize:"30px", fontWeight:"bolder"}}>Trending Categories</h1>
      </Container>
      <Container maxW="90%" maxH="250px" margin="auto" marginTop="10px" >
      <Image
            rounded={'md'}
            alt={'product image'}
            src={coverpic}
            fit={'cover'}
            align={'center'}
            margin="auto"
            maxW='90%'
            h={{ base: '100%', sm: '150px', lg: '220px' }}
          />
      </Container>
      <Container maxW="fit-content" marginLeft="10%" marginTop="30px" justifyItems="left" >
        <h1 style={{fontSize:"30px", fontWeight:"bolder"}}>More Savings</h1>
      </Container>
      <Container maxW="90%" maxH="250px" margin="auto" marginTop="10px">
      <Image
            rounded={'md'}
            alt={'product image'}
            src={coverpic}
            fit={'cover'}
            align={'center'}
            margin="auto"
            maxW='90%'
            h={{ base: '100%', sm: '150px', lg: '220px' }}
          />
      </Container>
    </Container >
  )
}

export default ActivitiesDeal
