import React from 'react'
import { Header, Slider } from '../../Components/Atoms'
import { ProductSection } from '../../Components/Molecules'
import { products } from '../../dummy-data/data'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../service/counter/counterSlice'

export default function Home() {
  let navigate = useNavigate()
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const clickMoreTerlaris = () => {
    navigate("/product/terlaris")
  }
  const clickMoreFavorit = () => {
    navigate("/product/favorit")
  }
  return (
    <div className='px-[10%] pb-20 w-full min-h-screen'>
      {/* <div className='fixed top-0 left-0 w-full px-[10%] bg-gray-50/60 z-10'>
        <Header />
      </div> */}
      <div className='pt-20'></div>
      <Slider />
      {/* hanya untuk contoh redux */}
      <div className='pt-10'>
        <div className='flex'>
          <button
            className='btn btn-secondary'
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span className='px-10'>{count}</span>
          <button
            className='btn btn-secondary'
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
      {/* hanya untuk contoh redux */}
      <ProductSection
        titleSection="Produk Terlaris"
        titleMore="Lihat Semua>"
        data={products}
        clickMore={() => clickMoreTerlaris()}
      />
      <ProductSection
        titleSection="Produk Favorit"
        titleMore="Lihat Semua>"
        data={products}
        clickMore={() => clickMoreFavorit()}
      />
    </div>
  )
}
