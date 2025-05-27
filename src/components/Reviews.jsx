import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import Button from './Button'

const Reviews = () => {
  return (
    <div className='flex flex-col items-center h-screen bg-[#5f7252] text-white'>
        <h4 className='text-2xl m-10 border-2 border-white rounded-full px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl w-fit mb-9'>Membership</h4>
        <h2 className='text-6xl max-w-4xl font-bold text-center m-5'>Crushing your health and fitness goals starts here...</h2>
        <div>
            <div className='bg-white text-black text-center rounded-4xl m-10 p-10 text-2xl/18'>
                <h3 className='font-bold text-4xl mb-10'>Month to <br /> Month</h3>
                <h3><strong className='text-[#5f7252] font-extrabold text-5xl'>$165</strong>/mo</h3>
               
                <FontAwesomeIcon icon={faCircleCheck} className='text-[#5f7252]' /> All classes <br />
                 <FontAwesomeIcon icon={faCircleCheck} className='text-[#5f7252]' /> All member events <br />
                  <FontAwesomeIcon icon={faCircleCheck} className='text-[#5f7252]' /> Full gym access
                  <p className='text-gray-500'>Charges every month <br /> unless you cancel</p>
                <Button content="Start 7 day free trial" bgColor="black" hoverColor="black" textColor="#ffffff" />
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Reviews