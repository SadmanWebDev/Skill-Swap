import React from "react";
import { Link } from "react-router";
import useSkills from "../../hooks/useSkills";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularSkills = () => {
  const [skills] = useSkills();

  React.useEffect(() => {
    AOS.init({ duration: 800, offset: 120, easing: "ease-in-out" });
  }, []);

  return (
    <section className="my-14 px-4 md:px-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2">Popular Skills</h2>
        <p className="text-gray-500">
          Discover trending skills and start learning or teaching today.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.skillId}
            data-aos="fade-up"
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="h-52 overflow-hidden">
              <img
                src={skill.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg font-semibold text-gray-800">
                {skill.skillName}
              </h3>
              <div className="flex items-center text-yellow-500 text-sm mb-1">
                ⭐ <span> {skill.rating}</span>
              </div>
              <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                {skill.description}
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="font-semibold text-primary">
                  ${skill.price}
                </span>
                <Link
                  to={`/skills/${skill.skillId}`}
                  className="btn bg-primary text-white rounded-xl"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSkills;
