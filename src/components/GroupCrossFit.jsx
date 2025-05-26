import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import features1 from "../assets/features1.png"
import feature2 from "../assets/features2.png"
import features3 from "../assets/features3.png"
import features4 from "../assets/features4.png"

const GroupCrossFit = () => {
  return (
    <>
    <div className='h-screen bg-neutral-950 sm:flex sm:justify-around sm:items-center text-white leading-11'>
      <div className='ml-2 sm:ml-15'>
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
      <div className='m-10'>
        <img src={features1} className='rounded-2xl' />
      </div>
    </div>





















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






















            <div className='h-screen bg-neutral-950 sm:flex sm:justify-around sm:items-center text-white leading-11'>
      <div className='ml-2 sm:ml-15'>
        {/* <div className='border-2 border-lime-900 rounded-full'>Group CrossFit Classes</div> */}
        <div className="border-2 border-lime-900 rounded-full px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl w-fit mb-9">
  Personal Training

</div>

        <h2 className='text-3xl/9 sm:text-5xl md:text-6xl max-w-3xl'>Be guided every step of the way with one of our world class coaches</h2>
        <div className='flex items-center gap-2'>
          <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' />
          Weightloss
        </div>
        <div className='flex items-center gap-2'>
          <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' />
          Competitive CrossFit
        </div>
        <div className='flex items-center gap-2'>
          <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' />
          Powerlifting
        </div>
      </div>
      <div className='m-10'>
        <img src={features3} className='rounded-2xl' />
      </div>
    </div>




























    <div className='h-screen bg-neutral-950 sm:flex sm:justify-around sm:items-center text-white leading-11'>
               <div className='hidden sm:block '>
                <img src={features4} />
              </div>
              <div className='ml-15'>
                {/* <div className='border-2 border-lime-900 rounded-full'>Group CrossFit Classes</div> */}
                <div className="border-2 border-lime-900 rounded-full px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl w-fit mb-9">
          Member Only Events

        </div>
        
                <h2 className='text-3xl/9 sm:text-5xl md:text-6xl max-w-3xl'>Make new friends and get competitive with fun member events</h2>
                <div className='flex items-center gap-2'>
                  <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' />
                  Friendly competitions
                </div>
                <div className='flex items-center gap-2'>
                  <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' />
                  Monthly challenges
                </div>
                <div className='flex items-center gap-2'>
                  <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' />
                  Summer potlucks and games


                </div>
              </div>
              <div className='sm:hidden m-10'>
                <img src={features4} className='rounded-2xl' />
              </div>
            </div>
    </>
  )
}

export default GroupCrossFit
