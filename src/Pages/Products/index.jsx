import React, { useCallback, useEffect, useState } from 'react'
import {Card} from '../../Components/Atoms'
import { useNavigate } from 'react-router-dom'

export default function Products() {
  let navigate = useNavigate()
  const handleDetail = (id)=>{
    navigate(`/product/${id}`)
  }
  const [products,setProducts] = useState([])
  const getProducts = useCallback(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data)=>setProducts(data))
  },[])
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div className='px-[10%] py-20'>
      <h1 className='pb-10 text-xl font-bold'>All Products</h1>
      <div className='grid grid-cols-6 gap-4'>
        {
          products.map((item,idx)=>{
            return <Card key={idx} image={item.image} onClick={()=>handleDetail(item.id)}/>
          })
        }
      </div>
    </div>
  )
}
