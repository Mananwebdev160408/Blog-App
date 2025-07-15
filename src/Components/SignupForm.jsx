import React from 'react'
import { useForm } from 'react-hook-form'
import Signup from '../firebase/auth/Signup'
import { useNavigate } from 'react-router'

function SignupForm() {
    let navigate=useNavigate()
    let {register,handleSubmit}=useForm()
    async function createaccount(data) {
        
        if(data){
            let result =await Signup({...data})
            if(result.status===true) {
                navigate('/')
            }

        }
    }
  return (
    <>
    <div>

      <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-amber-700 px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit(createaccount)}>
      <div className="relative py-3 sm:max-w-xs sm:mx-auto">
          <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-amber-600  rounded-xl shadow-lg">
              <div className="flex flex-col justify-center items-center h-full select-none">
                  <div className="flex flex-col items-center justify-center gap-2 mb-8">
                      <h1 className='text-white text-3xl mb-4 font-bold'>Blog App</h1>
                      <p className="m-0 text-[16px] font-semibold dark:text-white">Create your Account</p>
                      <span className="m-0 text-xs max-w-[90%] text-center text-amber-950">Get started with our app, just start section and enjoy experience.
                      </span>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                      <label className="font-semibold text-xs text-black ">Name</label>
                      <input className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-amber-800" 
                      {...register('name',{required:true})}
                      placeholder="Name" />
  
                  </div>
                  <div className="w-full flex flex-col gap-2">
                      <label className="font-semibold text-xs text-black ">Email</label>
                      <input className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-amber-800" 
                      {...register('email',{required:true})}
                      placeholder="Email" />
  
                  </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold text-xs text-black ">Password</label>
                  <input type="password" className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-amber-800" 
                  {...register('password',{required:true} )}
                  placeholder="••••••••" />
  
              </div>
              <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold text-xs text-black ">Date of Birth</label>
                  <input type="text" className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-amber-800" 
                  {...register('BirthDate',{required:true} )}
                  placeholder="DD/MM/YY" />
  
              </div>
              <div className="mt-5">
                  <button type='submit' onClick={()=>{
                    navigate('/')
                  }} className="py-1 px-8 bg-amber-500 hover:bg-amber-700 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">Create Account</button>
              </div>
          </div>
      </div>
      </form>
</div>
</div>
    </>
  )
}

export default SignupForm