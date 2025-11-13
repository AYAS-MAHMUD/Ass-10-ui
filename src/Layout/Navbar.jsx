import React, {use, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { IoHome } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { FaServicestack } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { IoBookmarks } from "react-icons/io5";
import { MdBookmarkAdd } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { TbLogin } from "react-icons/tb";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const {user,signOutUser} =use(AuthContext)
  // console.log(user.accessToken)
    // console.log(user)
    const handleLogout=()=>{
    signOutUser()
      .then(()=>{

      })
      .catch(error=>{
        console.log(error)
      })

      }


      // for theme toggle
const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <header className="w-full  shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
   
        {/* <div className="flex items-center gap-3">
          <span className="font-bold text-[28px] "><span className='text-purple-600'>Smart</span>Deal</span>
        </div> */}
        {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">
              HomeHero
            </h1>
            <p className="text-xs">Local Service Finder</p>
          </div>

        <div className="hidden md:flex items-center gap-6">
          <NavLink to='/' className="hover:text-blue-400 text-md font-semibold flex items-center gap-1"><IoHome />Home</NavLink>
          <NavLink to='/services' className="hover:text-blue-400 text-md font-semibold flex items-center gap-1"><GrServices />Services</NavLink>
          {
            user && <div className="hidden md:flex items-center gap-6">
           <NavLink to='/myservices' className="hover:text-blue-400 text-md font-semibold flex items-center gap-1"><FaServicestack />My Services</NavLink>
           <NavLink to='/addservices' className="hover:text-blue-400 text-md font-semibold flex items-center gap-1"><MdBookmarkAdd />Add Services</NavLink> 
           <NavLink to='/mybooking' className="hover:text-blue-400 text-md font-semibold flex items-center gap-1"><IoBookmarks/>My Bookings</NavLink> 
           <NavLink to='/profile' className="hover:text-blue-400 text-md font-semibold flex items-center gap-1"><FaUser />Profile</NavLink> 

            </div>
          }
        </div>
        <div className='flex items-center gap-4'>
        <input
           onChange={(e) => handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>
        <div  className='btn bg-blue-600 hover:bg-blue-700 text-white'>
          
          {
              user? <div> <button onClick={handleLogout} className=" text-md font-semibold flex items-center gap-1">Log Out<HiOutlineLogout /></button></div> :
              <Link to='/login' className=" text-md font-semibold flex items-center gap-1">Login<TbLogin /></Link>
          }  

        </div>
        </div>
        {/* Mobile er jonno toggle icon */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {open ? (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden overflow-hidden">
            <div className="px-4 pb-4 space-y-3 flex flex-col">
              <NavLink to='/' className="hover:text-green-600 py-2 border-b text-md font-semibold">Home</NavLink>
              <NavLink to='/services' className="hover:text-green-600 py-2 border-b text-md font-semibold">Services</NavLink>
            {
              user && <div className="pb-4 space-y-3 flex flex-col">
              <NavLink to='/myservices' className="hover:text-blue-400 border-b py-2 text-md font-semibold">My Services</NavLink>
              <NavLink to='/addservices' className="hover:text-blue-400 text-md border-b py-2 font-semibold">Add Services</NavLink>
              <NavLink to='/mybooking' className="hover:text-blue-400 text-md border-b py-2 font-semibold">My Bookings</NavLink>
              <NavLink to='/profile' className="hover:text-blue-400 text-md border-b py-2 font-semibold">Profile</NavLink>

              </div>
            }
            <div className='btn bg-blue-600 hover:bg-blue-700 text-white'>
              
            {
                user? <div> <button onClick={handleLogout} className=" text-md font-semibold">Log Out</button></div> :
                <div><Link to='/login' className=" text-md font-semibold">Login</Link></div>
            }  
        </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}