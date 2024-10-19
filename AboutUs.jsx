import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
const AboutUs = () => {
  const aboutItems = [
    {
      title: "Our Mission",
      description:
        "We aim to connect students with experienced mentors to guide them in their career paths, helping them achieve their goals and succeed in their professional journeys.",
      icon: "🎯", // Use any emoji or icon as a placeholder
    },
    {
      title: "What We Offer",
      description:
        "A diverse range of mentorship opportunities across various fields, tailored to meet the unique needs and aspirations of each student.",
      icon: "🌟",
    },
    {
      title: "Our Vision",
      description:
        "Empowering the next generation of professionals through mentorship, fostering a community of lifelong learners and industry leaders.",
      icon: "🚀",
    },
    {
      title: "Why Choose Us",
      description:
        "We provide personalized mentor matches, extensive resources, and a supportive environment to ensure our students thrive.",
      icon: "💡",
    },
    {
        title: "Global Reach",
        description:
          "We have a network of mentors from various parts of the world, ready to provide global insights and perspectives.",
        icon: "🌍",
      },
      {
        title: "Continuous Learning",
        description:
          "We believe in lifelong learning and ensure our platform offers opportunities for continuous growth.",
        icon: "📚",
      },
      {
        title: "Student-Centric Approach",
        description:
          "Our students are at the core of everything we do, and we strive to provide personalized mentorship experiences.",
        icon: "👩‍🎓",
      },
      {
        title: "Diverse Expertise",
        description:
          "Our mentors come from diverse backgrounds and industries, providing students with a wide range of expertise.",
        icon: "🌐",
      },
  ];

  const teamMembers = [
    {
      name: "Sahilpreet Singh",
      role: "Founder & CEO",
      image: "https://via.placeholder.com/150", // Replace with actual image links
      bio: "Sahilpreet Singh has over 3 years of experience in the education and technology.",
    },
    {
      name: "Rohit Kakralia",
      role: "Chief Operating Officer",
      image: "https://via.placeholder.com/150",
      bio: "Rohit Karkralia has over 3 years of experience in the education and technology.",
    },
    {
      name: "Harleen Kaur Bhullar",
      role: "Head of Mentorship",
      image: "https://via.placeholder.com/150",
      bio: "Harleen has over 3 years of experience in the education and technology.",
    },
    {
      name: "Harsh Kumar",
      role: "Head of Mentorship",
      image: "https://via.placeholder.com/150",
      bio: "Harsh has over 3 years of experience in the education and technology.",
    },
    {
      name: "Harjot Kaur",
      role: "Head of Mentorship",
      image: "https://via.placeholder.com/150",
      bio: "Harjot has over 3 years of experience in the education and technology.",
    },
    {
      name: "Gurleen Kaur",
      role: "Head of Mentorship",
      image: "https://via.placeholder.com/150",
      bio: "Gurleen has over 3 years of experience in the education and technology.",
    },
  ];

  return (
    <div className="pt-8">
        <Navbar/>
    <div className="py-16 px-8">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are dedicated to connecting students with expert mentors from
          various industries, empowering them to achieve their career goals and
          unlock their full potential.
        </p>
      </div>

      {/* About Section */}
      <h2 className="text-center text-[36px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] mb-12">
        About Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {aboutItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-purple-100 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-6 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="text-6xl mb-4">{item.icon}</div>
            {/* Title */}
            <h3 className="text-purple-700 text-[24px] font-semibold mb-2">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-[16px]">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mt-16">
        <h2 className="text-center text-[36px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] mb-12">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-purple-100 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-6 flex flex-col items-center text-center"
            >
              {/* Team Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full mb-4 w-32 h-32 object-cover"
              />
              {/* Name */}
              <h3 className="text-purple-700 text-[24px] font-semibold mb-1">
                {member.name}
              </h3>
              {/* Role */}
              <p className="text-gray-500 mb-2">{member.role}</p>
              {/* Bio */}
              <p className="text-gray-600 text-[16px]">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-[30px] font-bold text-purple-700 mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Join thousands of students who are taking control of their careers
          with the help of expert mentors. Let's work together to unlock your
          full potential!
        </p>
        <NavLink to='/signup'><button className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
          Get Started Today
        </button>
        </NavLink>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;