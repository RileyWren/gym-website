


import React from 'react'
import Rating from './Rating'
import man from '../assets/man.jpeg'
import man2 from '../assets/man2.jpeg'
import man3 from '../assets/man3.webp'

const reviews = [
  {
    img: man,
    text: "“In just 6 months, I dropped 15 pounds and feel stronger than ever.”",
  },
  {
    img: man2,
    text: "“I've gotten so much stronger after joining it's insane. My deadlift increased by 65lbs.”",
  },
  {
    img: man3,
    text: "“While I am passionate about health and fitness this gym is more like a community to me than anything!”",
  }
]

const Reviews = () => {
  return (
    <div className="bg-[#5f7252] py-10 px-5">
      <h2 className='text-5xl font-bold text-center p-10 text-white mb-10'>Reviews</h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="backdrop-blur-lg bg-white/20 text-white p-6 rounded-2xl shadow-md border border-white/30 flex flex-col items-center text-center"
          >
            <Rating />
            <img
              src={review.img}
              alt={`review-${idx}`}
              className="rounded-full h-14 w-14 my-4 border-2 border-white"
            />
            <p className="text-sm">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
