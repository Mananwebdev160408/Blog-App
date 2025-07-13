import React from 'react'
import {auth} from '../firebase/firebase'

function Home() {
return(
  <>
  {auth.currentUser?(
    <>
    
    </>
  ):(
    <>
    <div className='h-[60vh]  w-screen flex justify-center items-center flex-col'>
      <div className='hover:scale-102 text-center transition-all duration-200 hover:text-amber-400 font-bold  '>
      <div className='text-7xl my-11 '>
        <h1 className='[text-shadow:0px_00px_10px_rgba(255,255,255,1)] '>Login to</h1>
      </div>
      <div className='text-8xl'>
        <h1 className='[text-shadow:0px_00px_10px_rgba(255,255,255,1)]'>view posts</h1>
      </div>
    </div>
    </div>
    </>
  )}
  </>
)
}

export default Home