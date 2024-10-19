import React from "react";

const Mentorlist = () => {
  return (
    <div className="flex bg-gray-200 rounded-lg shadow-md p-4 mb-4">
      {/* Left Section: Profile Information */}
      <div className="w-2/3">
        <p className="font-bold">Name</p>
        <p>Expertise</p>
        <p>B tech CSE...</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aspernatur architecto. Impedit, voluptate! Placeat ex repellendus unde tempora pariatur earum quos. Amet nostrum ipsa, iusto nesciunt delectus quaerat rerum ipsam....</p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          {/* Five stars, 4 filled */}
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill={i < 4 ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-5 h-5 ${i < 4 ? "text-yellow-500" : "text-gray-300"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 17.27l-5.18 3.73 1.64-6.73L2 9.74l6.9-.59L12 2.5l3.1 6.65 6.9.59-5.46 4.53 1.64 6.73z"
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Right Section: Placeholder for an Image */}
      <div className="w-1/3 bg-gray-100 rounded-lg"></div>
    </div>
  );
};

const ProfileList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* Render Multiple Profile Cards */}
      {[...Array(10)].map((_, i) => (
        <ProfileCard key={i} />
      ))}
    </div>
  );
};

export default Mentorlist;
