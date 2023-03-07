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
    email:string,
    password:string
}

let initialState={
    email:"",
    password:""
}

const Loginmodal = () => {
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
    
const handleSubmit=()=>{
    fetch(`https://nice-cyan-pelican-garb.cyclic.app/login`,{
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
            status: res.msg==="Login Successfull"?"success":"error",
            duration: 2000,
            isClosable: true,
          })
          if(res.msg=="Login Successfull"){
            localStorage.setItem("token",res.token)
            navigate("/game");
          }
         
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
        <Button bgColor="black" color="white" onClick={onOpen} _hover={{color:"white", bgColor:"gray"}}>Existing user</Button>
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
          <ModalHeader>Existing user</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} placeholder='Enter Email' name='email' onChange={handleChange}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Enter Password' type="password" name='password' onChange={handleChange}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Loginmodal