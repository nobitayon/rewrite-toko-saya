import React from 'react'
import { AllProduct, DetailProduct, Home, Login } from './Pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './Components/Atoms'

export default function App() {
  return (
    <BrowserRouter>
      <div className='fixed top-0 left-0 w-full px-[10%] bg-gray-50/60 z-10'>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<AllProduct />} />
        <Route path='/product/favorit' element={<AllProduct />} />
        <Route path='/product/terlaris' element={<AllProduct />} />
        <Route path='/product/:productId' element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  )
}
