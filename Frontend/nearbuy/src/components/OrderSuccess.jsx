import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { otpContext } from '../context/OtpContextProvider';

const OrderSuccess = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const{setIsOtpRight}=useContext(otpContext);
  const Navigate=useNavigate();
  const [isOpen,setIsOpen]=useState(true);
  const navigate=()=>{
    setIsOpen(false);
    setIsOtpRight(false);
    Navigate("/");
  }
  return (
    <div>
        {/* <Button onClick={onOpen} >Open Modal</Button> */}

       <Modal isOpen={isOpen} >
        <ModalOverlay />
        <ModalContent>
           
          
           <ModalBody textAlign={"center"}>
           <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='250px'
 
>
           <AlertIcon boxSize='40px' mr={0} />
           <AlertTitle mt={4} mb={1} fontSize='lg'>
    Application submitted!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for submitting your application. Our team will get back to you soon.
  </AlertDescription>

           </Alert>
           <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline' marginTop="10px" textAlign={"center"} onClick={navigate}>
           {/* <Link to="/">Continue Shopping</Link> */}Continue Shopping
  </Button>
           
           </ModalBody>

         
        </ModalContent>
       </Modal>
    </div>
  )
}

export default OrderSuccess





// function BasicUsage() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   return (
//     <>
//       <Button onClick={onOpen}>Open Modal</Button>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Lorem count={2} />
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme='blue' mr={3} onClick={onClose}>
//               Close
//             </Button>
//             <Button variant='ghost'>Secondary Action</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   )
// }