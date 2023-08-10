import React from 'react'
import Hero from '../layouts/Hero'
import Button from '../components/Button'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <>
      <Hero>
        <div className='flex flex-col px-4 '>
          <h2 className='text-center w-full px-[25%]'>-----</h2>
          <Button />
        </div>
      </Hero>
      <Carousel />
    </>
  )
}

export default Home