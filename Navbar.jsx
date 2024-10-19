import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const prompt = location.state?.prompt;

  const inputRef = useRef(null);

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // State for left menu (CiMenuFries)
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);

  // State for right menu (CgProfile)
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);

  // Toggle functions
  const toggleLeftMenu = () => {
    setIsLeftMenuOpen(!isLeftMenuOpen);
  };

  const toggleRightMenu = () => {
    setIsRightMenuOpen(!isRightMenuOpen);
  };

  return (
    <div className="border-b-2 border-[#D9D9D9] fixed top-0 left-0 z-10 bg-white">
      <div className="w-screen h-[40px] px-[40px] text-[#580092] text-[25px] flex items-center mt-[5px]">
        <img src="/Logo.jpeg" className="w-[50px] h-[50px]" alt="logo" />
        MENCO
      </div>

      <nav className="w-screen h-[40px] flex items-center justify-between px-[40px]">
        <span
          className="text-[25px] text-[#580092] cursor-pointer"
          onClick={toggleLeftMenu}
        >
          <CiMenuFries />
        </span>

        <span className="w-[50%] flex items-center justify-between">
          <input
            ref={inputRef}
            type="text"
            className="bg-[#D9D9D9] md:w-[95%] w-[90%] h-[30px] rounded-[50px] px-[10px]"
            placeholder="Search here"
          />
          <FaSearch className="text-[#580092] text-[20px]" onClick={handleSearchClick} />
        </span>
        <div>
        
          <CgProfile className="text-[30px] cursor-pointer" onClick={toggleRightMenu} />
        </div>
      </nav>

      {/* Left Menu (CiMenuFries) */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 transition-all duration-300 ease-in-out shadow-lg overflow-hidden ${
          isLeftMenuOpen ? "w-[50%] md:w-[30%] translate-x-0" : "w-0 translate-x-[-100%]"
        }`}
      >
        <div className="flex flex-col p-4 justify-center items-center">
          <div className="flex bg-[#580092] items-center text-white md:px-[30px] w-full justify-between">
            <p className="md:text-[25px] text-[20px]">Welcome!</p>
            <button onClick={toggleLeftMenu} className="text-[25px]">
              &#10005;
            </button>
          </div>
          <ul className="mt-10 space-y-4 text-[20px] font-bold">
            <li>
              <NavLink to="/home" className="text-black">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-black">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/ourservices" className="text-black">
                Services
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Profile Menu (CgProfile) */}
      <div
        className={`fixed top-10 right-0 h-[60%]  z-50 rounded-[25px] bg-[#D9D9D9] transition-all duration-300 ease-in-out shadow-lg overflow-hidden ${
          isRightMenuOpen ? "w-[30%] md:w-[25%] translate-x-0" : "w-0 translate-x-[100%]"
        }`}
      >
        <div className="flex flex-col p-4 justify-center ">
          <div className="flex items-center text-white md:px-[30px] w-full justify-start gap-9">
          <button onClick={toggleRightMenu} className="text-[25px]">
              <CgProfile className="text-[#580092] text-[50px]"/>
            </button>
            <p className="md:text-[25px] text-[20px] text-black font-bold">{prompt && <p>{prompt}</p>}</p>
            
          </div>
          <ul className="mt-10 space-y-4 text-[20px] font-bold">
            <li>
              <NavLink to="/" className="text-black">
                Logout
              </NavLink>
            </li>
            <li>
              <NavLink to="/mentorsignup" className="text-black">
                Signup as mentor
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/feedback" className="text-black">
                Feedback
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-black">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay when a menu is open */}
      {(isLeftMenuOpen || isRightMenuOpen) && (
        <div
          onClick={() => {
            setIsLeftMenuOpen(false);
            setIsRightMenuOpen(false);
          }}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
