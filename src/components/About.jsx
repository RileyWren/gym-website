import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col bg-neutral-950 items-center text-center text-white h-screen p-10'>
            <div className="border-2 border-lime-900 rounded-full px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl w-fit">
            Group CrossFit Sessions
          </div>
          <h2 className='text-5xl font-bold max-w-4xl p-10'>Hi! We’re a local CrossFit gym in Denver, Colorado.</h2>
          <p className='text-lg max-w-2xl'>CrossFit Gym was started by Alex and Sparky in 2012. It’s our mission to help people in Denver get fit, stay healthy, and live life on their terms without fitness being an obstacle.</p>
    </div>
  )
}

export default About