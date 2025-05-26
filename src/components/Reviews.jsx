import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import Button from './Button'

const Reviews = () => {
  return (
    <div>
        <h4>Membership</h4>
        <h2>Crushing your health and fitness goals starts here...</h2>
        <div>
            <div>
                <h3>Month to Month</h3>
                <h3>$165</h3>/mo
               
                <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' /> All classes
                 <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' /> All member events
                  <FontAwesomeIcon icon={faCircleCheck} className='text-green-700' /> Full gym access
                  <p>Charges every month unless you cancel</p>
                <Button content="Start 7 day free trial" bgColor="black" hoverColor="black" textColor="#ffffff" />
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Reviews