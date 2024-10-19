import React from "react";

const WhyUs = () => {
  const whyUsItems = [
    {
      title: "Expert Mentors",
      description:
        "Our platform features top-tier professionals with extensive experience in various industries, ready to guide you toward your career goals.",
      icon: "🎓",
    },
    {
      title: "Tailored Guidance",
      description:
        "Receive personalized mentoring based on your career aspirations, ensuring you get the support and advice you need.",
      icon: "🛠️",
    },
    {
      title: "Career Growth",
      description:
        "Accelerate your professional development with a focused mentorship approach that helps you acquire industry-relevant skills.",
      icon: "📈",
    },
    {
      title: "Community Support",
      description:
        "Join a community of like-minded individuals who are passionate about growth and learning, fostering connections and networking.",
      icon: "🌐",
    },
  ];

  return (
    <div className="py-16 px-8">
      <h2 className="text-center text-[36px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] mb-12">
        Why Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {whyUsItems.map((item, index) => (
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
    </div>
  );
};

export default WhyUs;
