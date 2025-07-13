import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CreatePostPage from './pages/CreatePostPage'

function App() {
  

  return (
    <>
    <div className='min-h-[78.2vh]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/postform' element={<CreatePostPage/>}/>
        
      </Routes>
    </div>
    </>
  )
}

export default App
