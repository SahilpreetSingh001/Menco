import React, { useEffect, useState } from 'react';
import CardContainer from './CardContainer';
import CardContainer1 from './CardContainer1';
import Card from './Card'; // Assuming Card is the component to display mentor details
import { NavLink, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const [mentors, setMentors] = useState([]);

  // Fetch existing mentors from the backend when the component mounts
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch("http://localhost:5000/mentorsignup"); // Replace with your backend URL
        const data = await response.json();
        setMentors(data); // Set existing mentors
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  // Check if there's new mentor data passed via state
  useEffect(() => {
    if (location.state?.newMentor) {
      const newMentor = location.state.newMentor;
      setMentors(prevMentors => [...prevMentors, newMentor]); // Append the new mentor to the existing list
    }
  }, [location.state]);

  return (
    <div>
      <div className="flex w-[100%] md:w-[100%] h-[90vh] justify-between items-center bg-white p-8 ">
        <div className="w-[40%] ml-[50px]">
          <h2 className="text-purple-700 md:text-[60px] text-[40px] font-bold ">
            FIND YOUR <br /> MENTOR
          </h2>
          <button className="bg-purple-700 text-white py-2 px-6 rounded-md hover:bg-purple-800 transition">
            Register for free
          </button>
        </div>

        <div className="w-[60%] flex justify-center items-center mr-[50px]">
          <div className="relative bg-gray-200 w-full h-[400px] rounded-lg overflow-hidden">
            <img src="img.png" alt="image" className="h-full w-full object-fit" />
          </div>
        </div>
      </div>

      {/* Display all mentors */}
      <div className='px-[80px]'>
        <p className='text-[30px] text-black font-bold'>Top Mentors</p>
        {mentors.length > 0 ? (
          mentors.map((mentor, index) => (
            <Card
              key={index}
              name={mentor.name}
              field={mentor.category}
              review={mentor.description || "No review provided"}
            />
          ))
        ) : (
          <p>No mentors available</p>
        )}
      </div>

      <div className='px-[80px]'>
        <p className='text-[30px] text-black font-bold'>Top Mentors for Tech</p>
        <CardContainer />
      </div>
      
      <div className='px-[80px]'>
        <p className='text-[30px] text-black font-bold'>Top Mentors for Non-Tech</p>
        <CardContainer1 />
      </div>
    </div>
  );
};

export default Home;
