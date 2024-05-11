import React from 'react'
import {Card, TitleSection,} from '../../Atoms'
import { useNavigate } from 'react-router-dom'

export default function ProductSection(props) {
    const {titleSection,titleMore, data} = props
    let navigate = useNavigate()
    const handleClick = (id)=>{
      navigate(`/product/${id}`)
    }
    const toAllProducts = ()=>{
      navigate("/product")
    }
  return (
    <div>
      <TitleSection title={titleSection} titleMore={titleMore}/>
      <div className='flex justify-between'>
      {
      data.map((item,index)=> {
        return <Card key={index} className='w-[16%]' image={item.image} onClick={()=>handleClick(item.id)}/>
      })
    }
      </div>
    </div>
    
  )
}
