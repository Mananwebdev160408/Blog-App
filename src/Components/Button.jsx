import React from 'react'

function Button({children}) {
  return (
    <>
    <button className='w-[80px] h-[30px] rounded-[100px] text-[18px] font-semibold bg-orange-700 cursor-pointer text-white border-none hover:scale-103 hover:translate-y-[-1px] transition-all duration-200 '>
        {children}
    </button>
    </>
  )
}

export default Button