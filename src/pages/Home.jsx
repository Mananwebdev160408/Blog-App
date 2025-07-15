import React, { useEffect, useState } from 'react'
import {auth} from '../firebase/firebase'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ListPosts from '../firebase/post/GetAllPost'
import PostCard from '../Components/PostCard'

function Home() {
  const [Postslist, setPostslist] = useState([])
  async function getallactiveposts() {
    let postlist=await ListPosts()
    setPostslist(postlist)
  }
  useEffect(()=>{
    getallactiveposts()
  },[])
return(
  
  <>
  <Navbar/>
  <div className='min-h-[78vh]'>
  {auth.currentUser?(
    <>
    <div className='w-[100vw] flex justify-around flex-wrap'>
      {
        Postslist.map((post)=>(
          <div key={post.id}>
          <PostCard {...post}/>
          </div>
        ))
      }
    </div>
    </>
  ):(
    <>
    <div className='h-[60vh]  w-screen flex justify-center items-center flex-col'>
      <div className='hover:scale-101 text-center transition-all duration-200 hover:text-amber-400 font-bold  '>
      <div className='text-7xl my-11 '>
        <h1 className='[text-shadow:0px_00px_10px_rgba(255,255,255,1)] '>Login to</h1>
      </div>
      <div className='text-8xl'>
        <h1 className='[text-shadow:0px_00px_10px_rgba(255,255,255,1)]'>view posts</h1>
      </div>
    </div>
    </div>
    </>
  )}</div>
    <Footer />
  </>
)
}

export default Home