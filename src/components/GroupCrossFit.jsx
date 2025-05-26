import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import features1 from "../assets/features1.png"
import features2 from "../assets/features2.png"
import features3 from "../assets/features3.png"
import features4 from "../assets/features4.png"


const GroupCrossFit = () => {
  return (
    <div className='h-screen bg-neutral-950 sm:flex sm:justify-around sm:items-center text-white leading-11'>
      <div className='ml-15'>
        {/* <div className='border-2 border-lime-900 rounded-full'>Group CrossFit Classes</div> */}
        <div className="border-2 border-lime-900 rounded-full px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl w-fit mb-9">
  Group CrossFit Classes
</div>

        <h2 className='text-3xl/9 sm:text-5xl md:text-6xl max-w-3xl'>Get fit while having fun with our group CrossFit classes</h2>
        <div className='flex items-center gap-2'>
          <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' />
          just 30 min long
        </div>
        <div className='flex items-center gap-2'>
          <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' />
          Warm up & workout included
        </div>
        <div className='flex items-center gap-2'>
          <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' />
          Fun is guaranteed
        </div>
      </div>
      <div>
        <img src={features1} />
      </div>
    </div>
  )
}

export default GroupCrossFit
