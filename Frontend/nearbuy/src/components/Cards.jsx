
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

export default function ProductSimple() {
  return (
    <Center py={3}>
      <Box
        maxW={'fit-content'}
        maxH="fit-content"
        w={'full'}
        bg="transparent"
        rounded={'md'}
        p={2}
        justifyContent="center"
        alignItems="center"
        border="1px solid red"
        overflow={'hidden'}>
        <Box
          h={'50px'}
          mb={5}
          ml="22%"
          pos={'relative'}>
          <Image
            src={
              'https://img4.nbstatic.in/tr:w-/62d6747fb3c621000b6fb633.png'
            }
            layout={'fill'}
            maxH="100%"
          />
        </Box>
        <Stack
        border="1px solid green"
        mb="0px">
          
          <Heading
            fontSize={'sm'}
            fontFamily={'body'}>
            Restaurant Deals
          </Heading>
          
        </Stack>
      </Box>
    </Center>
  );
}
