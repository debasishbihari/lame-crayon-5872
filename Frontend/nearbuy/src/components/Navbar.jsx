import React from "react";
import {
  Container,
  Box,
  Heading,
  Link,
  Icon,
  Image,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
  InputRightElement,
  InputLeftElement,
  InputGroup,
  Input,
  VStack,
  Spacer,
  Button,
  Divider,
} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.jpeg";
import { transform } from "framer-motion";

const Navbar = () => {
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Statistics",
    "Contacts",
  ];
  return (
    
    <Container
      h="120px"
      // marginBottom="50px"
      pos="fixed"
      zIndex="2"
      padding="20px"
      maxW="100%"
      display="flex"
      justifyContent="space-evenly"
      color="black"
      shadow="base"
    >
      <Box
        maxW="20%"
      >

        <Box
          display={["flex", "flex", "none", "none", "none"]}
        >

          <IconButton
            // onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} />
              ) : (
                <HamburgerIcon w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Box>



        <Box
          // textAlign={useBreakpointValue({ base: "center", md: "left" })}
          color={useColorModeValue("gray.800", "white")}
          ml={{ lg: "10px" }}
          mt="-20px"
          p="10px"
          w={{ lg: "500px", md: "120px", sm: "120px" }}
          display={["none", "none", "flex", "flex", "flex"]}
        >
          <Image
            alt={"Logo"}
            onClick={() => GoTo("/")}
            height="100px"
            src={logo}
            cursor="pointer"
            w={"350px"}
          />
        </Box>

      </Box>

      <Box
        maxW="70%"
        marginLeft="0px"
        padding="15px"
      >
        <InputGroup
          // display={{ base: "1", md: "inline-flex" }}
          w={"700px"}
          justifyItems={"center"}
          width={{
            xl: "800px",
            lg: "500px",
            md: "300px",
            base: "100px",
          }}
        >
          <InputLeftElement children={<SearchIcon />} />
          <Input
            placeholder="Search Here"
            onChange={() => abcd()}
            size="lg"
            // value=""
            //

            // borderRadius={50}
            bgColor="white"
          />
          <Button
            bg="red.500"
            size="lg"
            _hover={{ color: "black", bg: "red.500", border: "2px solid red" }}>Search</Button>

        </InputGroup>
      </Box>
    </Container>
  );
};

export default Navbar;