import React from "react";
import CardContainer from "./CardContainer";
import AboutUs from "./AboutUs";
import WhyUs from "./WhyUs";
import { NavLink } from "react-router-dom";
const Beforelogin = () => {
  return (
    <div>
      <div className="absolute top-0 z-[-1] h-full w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="relative flex flex-col md:flex-row w-full h-[110vh] justify-between items-center p-8 ">
          {/* Background Gradient */}

          {/* Main Content */}
          <div className="w-full ml-6 md:ml-[50px] flex flex-col justify-center items-center space-y-6 text-center md:text-left">
            <h1 className="text-purple-700 md:text-[60px] text-[40px] drop-shadow-[4px_8px_12px_rgba(0,0,0,0.4)] font-bold leading-tight">
              YOUR CAREER JOURNEY STARTS HERE
            </h1>
            <h4 className="text-purple-700 text-[24px] italic">
              Find Your Mentor
            </h4>
            <h4 className="text-purple-700  italic">
              Ready to upskill? Connect with the best mentors worldwide anytime
              anywhere
            </h4>
            {/* <button className="bg-black text-white py-3 px-8 rounded-full hover:bg-purple-800 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105">
            Register for free
          </button> */}
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <NavLink to="/signup" >
                Register for Free
              </NavLink>
              </span>
            </button>
          </div>

          {/* Placeholder for possible image or additional content */}
          {/* <div className="hidden md:block w-[60%] flex justify-center items-center mr-[50px]">
    <div className="relative bg-gray-200 w-full h-[400px] rounded-lg shadow-lg flex justify-center items-center">
      {/* Add image or content here */}
          {/* </div>
  </div> */}
        </div>

        {/* Decorative Design Element */}
        <div className="design rounded-t-[50%] opacity-75 shadow-purple-700 shadow-t-inner border-t-4 border-purple-700 w-full h-[300px]"></div>

        <div className="px-[80px] mt-[-150px]">
          <p className="text-center text-[36px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] mb-12">
            Top Mentors
          </p>
          <CardContainer />
        </div>

        <AboutUs />
        <WhyUs />
      </div>
    </div>
  );
};

export default Beforelogin;
