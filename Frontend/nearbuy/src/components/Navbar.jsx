// import React, {useEffect, useState} from "react";
// import {
//   Container,
//   Box,
//   Heading,
//   Link,
//   Icon,
//   Image,
//   IconButton,
//   useDisclosure,
//   useColorModeValue,
//   useBreakpointValue,
//   InputRightElement,
//   InputLeftElement,
//   InputGroup,
//   Input,
//   VStack,
//   Spacer,
//   Button,
//   Divider,
//   useToast
// } from "@chakra-ui/react";
// import {
//   FaUserCircle,
//   FaUser,
//   FaUserPlus,
//   FaRegUser,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { Flex } from "@chakra-ui/react";

// import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
// import logo from "../assets/logo.jpeg";
// import { transform } from "framer-motion";
// import { useDispatch, useSelector } from "react-redux";
// import { GetItem, setItem } from "../local";


// const Navbar = () => {
//   const toast = useToast();
//   const { userData } = useSelector((store) => store.auth);
//   const [Data, SetData] = useState({});
//   const navigateTo = useNavigate();
//   const GoTo = (path) => {
//     navigateTo(path);
//   };


//   const admin = () => {
//     toast({
//       title: "Welcome Admin.",
//       description: `please provide your Credential Here 

//         Admin Username And password  ---------------------------------------------------------------
//         username : admin@admin.com  password :123456.`,
//       status: "success",
//       duration: 6000,

//       isClosable: true,
//     });
//     GoTo("/login");
//   };

//   useEffect(() => {
//     console.log("userdata", userData);
//     SetData(userData);
//   }, [userData]);
//   const user=GetItem("Login");
//   console.log(user)


//   const dispatch = useDispatch();
//   const { getDisclosureProps, getButtonProps } = useDisclosure();

//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const buttonProps = getButtonProps();
//   const disclosureProps = getDisclosureProps();
//   const links = [
//     "Home",
//     "About",
//     "Skills",
//     "Projects",
//     "Statistics",
//     "Contacts",
//   ];
//   return (

//     <Container
//       h="80px"
//       // marginBottom="50px"
//       bg={"white"}
//       mt={"-83px"}
//       pos="fixed"
//       zIndex="99"
//       padding="20px"
//       maxW="100%"
//       display="flex"
//       justifyContent="space-evenly"
//       color="black"
//       shadow="base"

//     >
//       <Box
//         maxW="20%"
//       >

//         <Box
//           display={["flex", "flex", "none", "none", "none"]}
//         >

//           <IconButton
//             // onClick={onToggle}
//             icon={
//               isOpen ? (
//                 <CloseIcon w={3} h={3} />
//               ) : (
//                 <HamburgerIcon w={5} h={5} />
//               )
//             }
//             variant={"ghost"}
//             aria-label={"Toggle Navigation"}
//           />
//         </Box>



//         <Box
//           // textAlign={useBreakpointValue({ base: "center", md: "left" })}
//           color={useColorModeValue("gray.800", "white")}
//           ml={{ lg: "10px" }}
//           mt="-20px"
//           p="10px"
//           w={{ lg: "500px", md: "120px", sm: "120px" }}
//           display={["none", "none", "flex", "flex", "flex"]}
//         >
//           <Image
//             alt={"Logo"}
//             onClick={() => GoTo("/")}
//             height="60px"
//             src={logo}
//             cursor="pointer"
//             w={"250px"}
//           />
//         </Box>

//       </Box>

//       <Box
//         maxW="70%"
//         marginLeft="0px"
//         padding="1px"
//       >
//         <InputGroup
//           // display={{ base: "1", md: "inline-flex" }}
//           maxW={"600px"}
//           justifyItems={"center"}
//           display={["none", "none", "flex", "flex", "flex"]}
//         >
//           <InputLeftElement children={<SearchIcon />} />
//           <Input
//             placeholder="Search Here"
//             onChange={() => abcd()}
//             size="lg"
//             // value=""
//             //

//             // borderRadius={50}
//             bgColor="white"
//           />
//           <Button
//             bg="red.500"
//             size="lg"
//             _hover={{ color: "black", bg: "red.500", border: "2px solid red" }}>Search</Button>

//         </InputGroup>
//       </Box>

//       <Box
//         maxW="70%"
//         marginLeft="0px"
//         padding="1px"

//       >

//       </Box>
//     </Container>
//   );
// };

// export default Navbar;



import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  InputRightElement,
  InputLeftElement,
  InputGroup,
  Input,
  Link,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import {useSelector} from "react-redux"
import {BiCart} from "react-icons/bi"

import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [data, setData] = useState({});

  const navigate = useNavigate();

  let Name=JSON.parse(localStorage.getItem("userName"));

  const cart = useSelector((store)=> store.cartsManager.cart)



  return (
    <Box
      h="100px"
      mt={"-2px"}
      pos="fixed"
      zIndex="99"
      width="100%"
      //       display="flex"
      //       justifyContent="space-evenly"
      //       color="black"
      shadow="base"
      position={"fixed"}
      // zIndex={"99"}
      bg={"white"}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}

    >
      <Flex
        width={["90%"]}
        margin={"auto"}
        // border="1px solid red"
        
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'90px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        // borderBottom={1}
        //   borderStyle={'solid'}
        //   borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex style={{
          alignItems: "center"
        }}
         flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Image
            maxW={"200px"}
            src={logo}
          >

          </Image>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            {/* <DesktopNav /> */}
          </Flex>

        </Flex>




       {/* Search bar */}

          

            <Box
        maxW="70%"
        marginLeft="0px"
        padding="1px"
      >
        <InputGroup
          // display={{ base: "1", md: "inline-flex" }}
          maxW={"800px"}
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
            color={"white"}
            size="lg"
            _hover={{ color: "black", bg: "red.500", border: "2px solid red" }}>Search</Button>

        </InputGroup>
      </Box>





       











        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          marginLeft={"20px"}
          direction={'row'}
          border="1px solid red"
          spacing={1}>
          <NavLink style={{textDecoration:"none"}} to="/login">
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            bg={'#f26226'}
            color={"white"}
            _hover={{
              bg: 'pink.300',
            }}>

          
          <h3 >{Name ? "Hi, "+Name : "Sign In"}</h3>
          
          </Button>
          </NavLink>
        </Stack>


         {/* Cart Space */}
         <Stack style={{
          alignItems: "end"
        }} 
        flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>

          
          

          <div>
            <Link to="/cart">
              <span style={{fontSize:"18px",color:"red", fontWeight:"600" }}>{cart.length}</span>             
              <h2 style={{fontSize:"40px",marginTop:"-17px", color:"green"}}><BiCart /></h2>
            </Link>
          </div>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            {/* <DesktopNav /> */}
          </Flex>

        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={"grey"}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


const NAV_ITEMS = [
  // {
  //   label: 'ON THE MENU',

  // },
  // {
  //   label: 'PRICING',
  // },
  // {
  //   label: 'WINE',
  //   href: '#',
  // },
  // {
  //   label: 'GIFTS',
  //   href: '#',
  // },
  // {
  //   label: 'MARKET',
  //   href: '#',
  // },
];








