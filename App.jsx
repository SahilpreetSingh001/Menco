import './App.css';
import Home from './compnents/Home'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './compnents/Navbar'; 
import Login from './compnents/Login';
import Signup from './compnents/Signup';
import MentorSignup from './compnents/Mentorsignup';
import Beforelogin from './compnents/Beforelogin';
import Navbar2 from './compnents/Navbar2';
import MentorProfile from './compnents/Mentorprofile';
import About from './compnents/About';
import Mentorlist from './compnents/Mentorlist';
import WhyUs from './compnents/WhyUs';
import Parmindersingh from './compnents/Parmindersingh';
import Daljeetsingh from './compnents/Daljeetsingh';
import Randhirsingh from './compnents/Randhirsingh';
import Harpreetkaur from './compnents/Harpreetkaur';


function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <> <Navbar/> <Home/></>
    },
    {
      path: "/login",
      element: <> <Login/></>
    },
    {
      path: "/signup",
      element: <> <Signup/></>
    },
    {
      path: "/mentorsignup",
      element: <> <MentorSignup/></>
    },
    {
      path: "/",
      element: <> <Navbar2/><Beforelogin/></>
    },
    {
      path: "/mentorprofile",
      element: <> <MentorProfile/></>
    },
    {
      path: "/about",
      element: <> <About/></>
    },
    {
      path: "/mentorlist",
      element: <> <Mentorlist/></>
    },
    {
      path: "/whyus",
      element: <> <WhyUs/></>
    },
    {
      path: "/parmindersingh",
      element: <> <Parmindersingh/></>
    },
    {
      path: "/daljeetsingh",
      element: <> <Daljeetsingh/></>
    },
    {
      path: "/randhirsingh",
      element: <> <Randhirsingh/></>
    },
    {
      path: "/randhirsingh",
      element: <> <Randhirsingh/></>
    },
    {
      path: "/harpreetkaur",
      element: <> <Harpreetkaur/></>
    },
    
  ]);

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  );
}

export default App;

// import './App.css';
// import React, { useState, useEffect } from 'react';
// import Home from './compnents/Home';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Navbar from './compnents/Navbar';
// import Login from './compnents/Login';
// import Signup from './compnents/Signup';
// import MentorSignup from './compnents/Mentorsignup';
// import Beforelogin from './compnents/Beforelogin';
// import Navbar2 from './compnents/Navbar2';
// import MentorProfile from './compnents/Mentorprofile';
// import About from './compnents/About';
// import Mentorlist from './compnents/Mentorlist';
// import CardContainer from './compnents/CardContainer'; // Import the CardContainer

// function App() {
//   const [mentors, setMentors] = useState([]);

//   // Fetch mentors from the backend when the component mounts
//   useEffect(() => {
//     const fetchMentors = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/mentors'); // Replace with your backend URL
//         const data = await response.json();
//         setMentors(data.mentors);
//       } catch (error) {
//         console.error("Error fetching mentors:", error);
//       }
//     };

//     fetchMentors();
//   }, []);

//   // Function to add a mentor to the state after a successful signup
//   const addMentor = (mentorData) => {
//     setMentors([...mentors, mentorData]);
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/home",
//       element: <> <Navbar/> <Home/> </>
//     },
//     {
//       path: "/login",
//       element: <> <Login/> </>
//     },
//     {
//       path: "/signup",
//       element: <> <Signup/> </>
//     },
//     {
//       path: "/mentorsignup",
//       element: <> <MentorSignup addMentor={addMentor} /> {/* Pass addMentor function */} </>
//     },
//     {
//       path: "/",
//       element: <> <Navbar2/> <Beforelogin/> </>
//     },
//     {
//       path: "/mentorprofile",
//       element: <> <MentorProfile/> </>
//     },
//     {
//       path: "/about",
//       element: <> <About/> </>
//     },
//     {
//       path: "/mentorlist",
//       element: <> <Mentorlist/> </>
//     },
//     {
//       path: "/mentors", // New route to display mentors
//       element: <> <CardContainer mentors={mentors} /> {/* Pass fetched mentors to CardContainer */} </>
//     },
//   ]);

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;
