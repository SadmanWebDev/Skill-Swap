import React, { useEffect } from "react";
import { useParams } from "react-router";
import useSkills from "../../hooks/useSkills";
import { FaStar, FaUser, FaDollarSign } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

const SkillDetails = () => {
  const { id } = useParams();
  const [skills] = useSkills();

  const skill = skills.find((item) => item.skillId === parseInt(id));

  useEffect(() => {
    AOS.init({ duration: 800, offset: 100 });
  }, []);

  const handleBookSession = (e) => {
    e.preventDefault();
    const form = e.target;
    form.reset();
    toast.success("Session booked successfully!");
  };

  if (!skill) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <span className="loading loading-ring loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto my-20 px-5">
      {/* Skill Info */}
      <div
        data-aos="fade-up"
        className="bg-base-100 rounded-2xl shadow-lg overflow-hidden"
      >
        <img
          src={skill.image}
          alt={skill.skillName}
          className=""
        />
        <div className="p-6 space-y-4">
          <h2 className="text-3xl font-bold text-primary">{skill.skillName}</h2>

          <div className="flex flex-wrap gap-5 text-gray-600">
            <p className="flex items-center gap-2">
              <FaUser className="text-secondary" />
              <span className="font-medium">{skill.providerName}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaDollarSign className="text-secondary" />
              Price: ${skill.price}
            </p>
            <p className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              Rating: {skill.rating}
            </p>
          </div>

          <p className="text-gray-500">
            <span className="font-semibold">Category:</span> {skill.category}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold">Slots Available:</span>{" "}
            {skill.slotsAvailable}
          </p>
          <p className="text-gray-600 leading-relaxed">{skill.description}</p>

          <p className="text-gray-500">
            <span className="font-semibold">Provider Email:</span>{" "}
            {skill.providerEmail}
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="bg-base-200 mt-10 p-6 rounded-2xl shadow-md"
      >
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Book a Session
        </h3>
        <form
          onSubmit={handleBookSession}
          className="space-y-4 max-w-md mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Book Session
          </button>
        </form>
      </div>
    </section>
  );
};

export default SkillDetails;
