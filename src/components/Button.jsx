import React from 'react'

const Button = (props) => {
  return (
    <button
      type="button"
      className="py-2.5 px-6 me-2 mb-2 text-sm font-semibold text-black bg-[#96fb57] rounded-full shadow-md hover:bg-[#85e84d] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#96fb57]/50"
    >
      {props.content}
    </button>
  )
}

export default Button
