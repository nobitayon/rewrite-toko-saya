import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function index() {
  let {productId} = useParams()
  let navigate = useNavigate()
  const [product,setProduct] = useState()

  const getProduct = useCallback(()=>{
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res=>res.json())
    .then((data)=>{
      console.log(data)
      setProduct(data)
    })
  })
  useEffect(()=>{
    getProduct()
  },[])

  return (
    product && (
      <div className='px-[20%] py-20'>
        <button className='mb-10' onClick={()=>navigate(-1)}>back</button>
        <img src={product.image} className='w-full p-10 h-96 object-contain border'/>
        <div className='pt-20'>
        <h2 className='text-2xl font-bold'>{product.title}</h2>
        <h1 className='py-5 text-4xl font-bold'>${product.price}</h1>
        <p>{product.description}</p>
        </div>
    </div>
    )
    
  )
}
