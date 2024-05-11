import React from 'react'
import { Link } from 'react-router-dom'

export default function TitleSection(props) {
  const {title,titleMore,clickMore} = props
  return (
    <div className='flex items-center pt-10 pb-5 justify-between'>
      <h1 className='text-lg font-bold'>{title}</h1>
      {/* <Link className='text-sm cursor-pointer' to={"/product"}>{titleMore}</Link> */}
      <p 
        className='text-sm cursor-pointer'
        onClick={clickMore}
      >
        {titleMore}
      </p>
    </div>
  )
}
