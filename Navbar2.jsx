import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
const Navbar2 = () => {
    let Links =[
      {name:"ABOUT US",link:"/about"},
      {name:"WHY US",link:"/whyus"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full bg-white fixed z-10 top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white text-[#580092] py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex text-[#580092] items-center font-[Poppins] 
     '>
        <img src="/Logo.jpeg"   className="w-[50px] h-[50px]" alt="logo" />
        MENCO
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <CiMenuFries name={open ? 'close':'menu'}/>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-white bg-slate-400  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 gap-3 duration-200 mr-4 '>{link.name}</a>
            </li>
          ))
        }
        <button class="relative inline-flex gap-4 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <NavLink to="/login" >
                Login
              </NavLink>
              </span>
            </button>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <NavLink to="/signup" >
                Signup
              </NavLink>
              </span>
            </button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar2