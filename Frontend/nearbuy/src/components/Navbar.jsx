import React, {useEffect, useState} from "react";
import {
  Container,
  Box,
  Heading,
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
  useToast
} from "@chakra-ui/react";
import {
  FaUserCircle,
  FaUser,
  FaUserPlus,
  FaRegUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { BiCart } from 'react-icons/bi';
import { Link } from "react-router-dom";

import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.jpeg";
import { transform } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { GetItem, setItem } from "../local";

import { useNavigate } from "react-router-dom";
import Cart from "../Pages/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const toast = useToast();
  const { userData } = useSelector((store) => store.auth);
  const [Data, SetData] = useState({});
  const navigateTo = useNavigate();
  const GoTo = (path) => {
    navigateTo(path);
  };


  const admin = () => {
    toast({
      title: "Welcome Admin.",
      description: `please provide your Credential Here 

        Admin Username And password  ---------------------------------------------------------------
        username : admin@admin.com  password :123456.`,
      status: "success",
      duration: 6000,
       
      isClosable: true,
    });
    GoTo("/login");
  };

  useEffect(() => {
    console.log("userdata", userData);
    SetData(userData);
  }, [userData]);
  const user=GetItem("Login");
  console.log(user)


  const dispatch = useDispatch();
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const cart = useSelector((store)=> store.cartsManager.cart)

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

  const navigate = useNavigate()

  const GoToHome=()=>{
    navigate("/")
  }

  return (

    <Container
      h="80px"
      // marginBottom="50px"
      bg={"white"}
      mt={"-83px"}
      pos="fixed"
      zIndex="99"
      padding="20px"
      maxW="100%"
      width="100%"
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
              onClick={GoToHome}
              height="60px"
              src={logo}
              cursor="pointer"
              w={"250px"}
          />
         
          
        </Box>

      </Box>

      <Box
        maxW="70%"
        marginLeft="0px"
        padding="1px"
      >
        <InputGroup
          // display={{ base: "1", md: "inline-flex" }}
          maxW={"600px"}
          justifyItems={"center"}
          display={["none", "none", "flex", "flex", "flex"]}
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

      <Box
        maxW="70%"
        marginLeft="0px"
        padding="1px"
        
      >
     
      </Box>
          <div>
            <Link to="/cart">
              <span style={{fontSize:"18px",color:"red", fontWeight:"600" }}>{cart.length}</span>             
              <h2 style={{fontSize:"40px",marginTop:"-17px", color:"green"}}><BiCart /></h2>
            </Link>
          </div>

    </Container>
  );
};

export default Navbar;