import React, { useEffect } from "react";
import { FaSearch, FaHandshake, FaChalkboardTeacher } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const steps = [
    {
      id: 1,
      title: "1. Browse Skills",
      description:
        "Explore a variety of skills offered by verified local users. Filter by category, rating, or price.",
      icon: <FaSearch />,
    },
    {
      id: 2,
      title: "2. Connect & Book",
      description:
        "Choose a provider and book a session instantly. Message them to discuss timing and details.",
      icon: <FaHandshake/>,
    },
    {
      id: 3,
      title: "3. Learn & Exchange",
      description:
        "Attend your session, share your feedback, and even offer your own skills to others!",
      icon: <FaChalkboardTeacher/>,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary mb-2">
           How It Works
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          SkillSwap makes it simple to learn, teach, and grow together. Here’s
          how it works:
        </p>
      </div>  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            data-aos="fade-up"
            className="card bg-base-100 rounded-2xl p-6 shadow-md text-center hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-center mb-4 text-4xl text-primary">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
