import React from 'react'
import Rating from './Rating'
import man from '../assets/man.jpeg'
import man2 from '../assets/man2.jpeg'
import man3 from '../assets/man3.webp'


const Reviews = () => {
  return (
    <div>
      <div>
        <Rating />
        <img src={man} className='rounded-full h-6'  />
      </div>
    </div>
  )
}

export default Reviews