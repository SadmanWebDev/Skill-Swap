import React, { useEffect } from "react";
import {
  FaHandshake,
  FaChalkboardTeacher,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseSkillSwap = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 120 });
  }, []);

  const reasons = [
    {
      id: 1,
      title: "Trusted Community",
      icon: <FaHandshake />,
      description:
        "Join a global network of verified learners and instructors who share skills, ideas, and opportunities.",
    },
    {
      id: 2,
      title: "Expert Instructors",
      icon: <FaChalkboardTeacher />,
      description:
        "Learn directly from top-rated mentors and professionals in real-world fields and creative industries.",
    },
    {
      id: 3,
      title: "Global Skill Exchange",
      icon: <FaGlobe />,
      description:
        "Collaborate across countries — trade your skills or learn something new from anywhere in the world.",
    },
    {
      id: 4,
      title: "Safe & Secure Platform",
      icon: <FaShieldAlt />,
      description:
        "Your data and sessions are protected with advanced security and a transparent review system.",
    },
  ];

  return (
    <section className="my-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Why Choose <span className="text-secondary">SkillSwap</span>?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Empower yourself by learning, teaching, and connecting through
          SkillSwap — a community built on collaboration and growth.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            data-aos="fade-up"
            className="card p-6 bg-base-100 rounded-2xl shadow-md hover:shadow-xl text-center transition duration-300"
          >
            <div className="flex justify-center text-4xl text-primary mb-3">
              {reason.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-2">
              {reason.title}
            </h3>
            <p className="text-gray-500 text-sm">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSkillSwap;
