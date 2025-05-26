import React from 'react'
import gym1 from '../assets/gym1.jpeg'
import gym2 from '../assets/gym2.jpeg'
import gym3 from '../assets/gym3.jpeg'
import gym4 from '../assets/gym4.jpg'


const Offer = () => {
  return (
    <div className='h-screen flex flex-col bg-neutral-950 text-white font-extrabold text-center items-center'>
        <h1 className='text-4xl m-20 sm:text-5xl md:m-30'>We offer something for <br className='hidden md:block'/> everybody</h1>
<div className='grid w-full gap-4 px-4 m-15
  grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-3 
  lg:grid-cols-4
'>
  <img src={gym1} className='w-full h-43 object-cover rounded-lg' />
  <img src={gym2} className='w-full h-43 object-cover rounded-lg' />
  <img src={gym3} className='w-full h-43 object-cover rounded-lg' />
  <img src={gym4} className='w-full h-43 object-cover rounded-lg' />
</div>
    </div>
  )
}

export default Offer