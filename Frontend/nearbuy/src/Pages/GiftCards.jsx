import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import { Box, Container, Grid } from '@chakra-ui/react';
import { Card, Image, Stack, Heading, Text, Divider, CardBody } from '@chakra-ui/react'

const GiftCards = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios
            .get("https://lazy-gray-iguana-fez.cyclic.app/products")
            .then(data => {
                setData(data.products)
                console.log(data);
            })
            .catch(error => {
                console.log(error)
            });

    }, [])


    return (
      <Container  maxW="90%" margin="auto"  marginTop="125px" border="2px solid red">
         <Box width="90%" margin="auto" marginTop="150px">
            <Grid templateColumns='repeat(4, 1fr)' gap={10}>
                {data.map((item) => {
                    if (item.type === "GIFT CARDS") {
                        return (
                            <Card key={item.id} maxW='sm' minChildWidth='120px'>
                                <NavLink to={`/products/${item.id}`}>
                                    <CardBody>
                                        <Image
                                            src={item.image}
                                            alt={`Picture of ${item.name}`}
                                            borderRadius='lg'
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{item.name}</Heading>
                                            <Text>
                                                {item.name}
                                            </Text>
                                            <Text color='blue.600' fontSize='2xl'>₹
                                                {" " + item.price}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                </NavLink>
                            </Card>
                        )
                    }
                })}
            </Grid>

        </Box>
      </Container>
       
    )
}

export default GiftCards;




