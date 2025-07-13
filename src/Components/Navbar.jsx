import React from "react";
import { Link } from "react-router";
import Home from "../pages/Home";
import { auth } from "../firebase/firebase";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Button from "./Button";

function Navbar() {
  return (
    <>
      <nav className=" h-16 flex justify-between bg-amber-500 ">
        <section className=" h-full w-60 text-3xl flex justify-center items-center font-bold text-white">
          <Link to='/' element={<Home/>} className="hover:scale-105 transition duration-300 hover:">Blog App</Link>
        </section>
        <section className="w-3xl ">
          {auth.currentUser ? (
            <>
            <Link to='/' element={<Home/>}>Home</Link>
            <Link to='/postform'>Create Post</Link>
            <Button>Logout</Button>
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
