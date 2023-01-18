import React from 'react';
import { Box, SimpleGrid, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
const Skeleton = () => {
    return (
        <SimpleGrid columns={3} spacing={4}>
            <Box padding='6' boxShadow='lg'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

            </Box>
            <Box padding='6' boxShadow='lg' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />
               
            </Box>
        </SimpleGrid>
    )
}

export default Skeleton;