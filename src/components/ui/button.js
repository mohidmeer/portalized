import React from 'react'

const Button = ({className='',children,...props}) => {
  return (
    <button {...props} className={` transition-all duration-300  bg-white text-black p-4 rounded-xl focus:ring-4 ring-white/30 b4 ${className}  `} >
        {children}
    </button>
  )
}

export default Button
