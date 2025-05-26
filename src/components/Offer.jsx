import React from 'react'
import gym1 from '../assets/gym1.jpeg'
import gym2 from '../assets/gym2.jpeg'
import gym3 from '../assets/gym3.jpeg'
import gym4 from '../assets/gym4.jpg'


const Offer = () => {
  return (
    <div className='h-screen flex flex-col bg-neutral-950 text-white font-extrabold text-center items-center'>
        <h1 className='text-4xl m-20 sm:text-5xl md:m-30'>We offer something for <br className='hidden md:block'/> everybody</h1>
        <img src={gym1} />
        <img src={gym2} />
        <img src={gym3} />
        <img src={gym4} />

    </div>
  )
}

export default Offer