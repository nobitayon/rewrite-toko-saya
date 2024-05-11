import React from 'react'
import {AllProduct, DetailProduct, Home, Login} from './Pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<AllProduct/>}/>
        <Route path='/product/favorit' element={<AllProduct/>}/>
        <Route path='/product/terlaris' element={<AllProduct/>}/>
        <Route path='/product/:productId' element={<DetailProduct/>}/>
      </Routes>
    </BrowserRouter>
  )
}
