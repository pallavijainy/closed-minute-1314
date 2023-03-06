import React from 'react'
import { Route, Routes } from 'react-router'
import {ChakraProvider} from "@chakra-ui/react"
import GamePage from './GamePage'
import HomePage from './HomePage/HomePage'
import Rules from './Rules'

const AllRoutes = () => {
  return (
    <Routes>
      
      <Route path='/' element={<ChakraProvider><HomePage/></ChakraProvider>}/>
      <Route path='/rules' element={<Rules/>}/>
      <Route path='/game' element={<GamePage/>}/>
    </Routes>
  )
}

export default AllRoutes