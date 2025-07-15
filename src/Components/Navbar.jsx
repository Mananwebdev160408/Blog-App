import React from "react";
import { Link } from "react-router";
import Home from "../pages/Home";
import { auth } from "../firebase/firebase";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Button from "./Button";
import Signout from "../firebase/auth/SignOut";


function Navbar() {
  async function logoutfn() {
    let result=await Signout()
    console.log(result.status)
  }
  return (
    <>
      <nav className=" h-16 flex justify-between bg-amber-500 ">
        <section className=" h-full w-60 text-3xl flex justify-center items-center font-bold text-white">
          <Link to='/' element={<Home/>} className="hover:scale-105 transition duration-300 hover:">Blog App</Link>
        </section>
        <section className="w-3xl ">
          {auth.currentUser ? (
            <>
            <div className="flex justify-around text-2xl font-medium items-center h-16">
            <Link to='/' element={<Home/>}>Home</Link>
            <Link to='/postform'>Create Post</Link>
            <button className='w-[80px] h-[30px] rounded-[100px] text-[18px] font-semibold bg-orange-700 cursor-pointer text-white border-none hover:scale-103 hover:translate-y-[-1px] transition-all duration-200 'onClick={()=>{logoutfn()}}>
        Logout
    </button>
            </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center h-full mr-6 text-white font-bold ">
                <Link to="/" element={<Home/>} ><Button>Home</Button></Link>
                <Link to="/login" element={<LoginPage/>} ><Button>Login</Button></Link>
                <Link to="/signup" element={<SignupPage/> }><Button>Signup</Button></Link>
              </div>
            </>
          )}
        </section>
      </nav>
    </>
  );
}

export default Navbar;
