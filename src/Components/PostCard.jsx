import React from 'react'

function PostCard({title,imgURL}) {
  return (
    <>
    <div className='border bg-amber-500  w-[300px] flex flex-col justify-between items-center rounded-3xl text-white'>
      <div className='border-4 border-amber-600 h-35 w-[280px] mx-auto my-3 rounded-3xl'>
          <img src={imgURL} alt="" />
        </div>
        <h1 className=' w-[280px] mb-5 text-center mx-auto text-2xl font-bold italic'>{title}</h1>
        
    </div>
    </>
  )
}

export default PostCard