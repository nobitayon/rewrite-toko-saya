import React from 'react'

export default function Card(props) {
    const {className, image} = props
  return (
    <div className={`${className} group h-60 overflow-hidden p-4 border rounded-lg shadow-md cursor-pointer duration-300 hover:shadow-none`}>
      <img src={image} className='w-full h-full object-cover object-center duration-300 group-hover:scale-95'/>
    </div>
  )
}
