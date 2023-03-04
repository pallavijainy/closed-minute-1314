import React from 'react'
import { Route, Routes } from 'react-router'

import GamePage from './GamePage'
import HomePage from './HomePage/HomePage'
import Rules from './Rules'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/rules' element={<Rules/>}/>
      <Route path='/game' element={<GamePage/>}/>
    </Routes>
  )
}

export default AllRoutes