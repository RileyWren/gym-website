import React from 'react'
import feature2 from '../../assets/features2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
const Step2 = () => {
  return (
     <div className='h-screen bg-neutral-950 sm:flex sm:justify-around sm:items-center text-white leading-11'>
           <div className='hidden sm:block '>
            <img src={feature2} />
          </div>
          <div className='ml-15'>
            {/* <div className='border-2 border-lime-900 rounded-full'>Group CrossFit Classes</div> */}
            <div className="border-2 border-lime-900 rounded-full px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl w-fit mb-9">
      Strength Training
    </div>
    
            <h2 className='text-3xl/9 sm:text-5xl md:text-6xl max-w-3xl'>Crush any strength program with our suite of strength equipment</h2>
            <div className='flex items-center gap-2'>
              <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' />
              Fully fitted powerlifting and strongman section
            </div>
            <div className='flex items-center gap-2'>
              <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' />
              Olympic lifting platforms, weights, and bars
            </div>
            <div className='flex items-center gap-2'>
              <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' />
              Dumbells ranging 5lbs-250lbs
            </div>
          </div>
          <div className='sm:hidden m-10'>
            <img src={feature2} className='rounded-2xl' />
          </div>
        </div>
  )
}

export default Step2