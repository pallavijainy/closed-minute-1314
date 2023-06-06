import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import {
    Modal,
    Button,
    FormControl,
    FormLabel,
    Input,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useToast,
  } from '@chakra-ui/react'

  
type inputProps={
    name:string,
    email:string,
    password:string
}

let initialState={
    name:"",
    email:"",
    password:""
}
const Registermodal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [input,setInput]= useState<inputProps>(initialState)
const Toast=useToast()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
const navigate=useNavigate()
    const handleChange=(e:any)=>{
        let {name,value}=e.target;
        setInput({...input,[name]:value})
    }
    console.log(input)

    const handleSubmit=()=>{
        fetch(`https://crazy-tan-ray.cyclic.app/user/register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(input)
        }).then(res=>res.json())
          .then(res=>{
            Toast({
                title: `${res.msg}`,
                position: 'top',
                status: res.msg==="You have been registered successfully"?"success":"error",
                duration: 2000,
                isClosable: true,
              })
            //   if(res.msg=="You have been registered successfull"){
            //     navigate("/login");
            //   }
             
          }).catch(err=>{
            Toast({
                title: `${err}`,
                description: "somthing went wrong",
                status: "error",
                duration: 2000,
                isClosable: true,
                position: 'top',
              })
          })
    }

  return (
    <div>
        <Button bgColor={"black"} color={"white"} onClick={onOpen} _hover={{color:"white", bgColor:"gray"}}>New user</Button>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
      
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New user</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} placeholder='Enter Name' name="name" onChange={handleChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder='Enter Email' name="email" onChange={handleChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Create Password</FormLabel>
              <Input placeholder='Password' type="password" name="password" onChange={handleChange} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
              Register
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Registermodal