import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const providers = [
  {
    id: 1,
    name: "Alex Martin",
    skill: "Guitar Lessons",
    rating: 4.9,
    image: "https://i.ibb.co/92ZJdKC/alex-martin.jpg",
  },
  {
    id: 2,
    name: "Sara Hossain",
    skill: "Spoken English",
    rating: 4.8,
    image: "https://i.ibb.co/ZYTVbtP/sara-hossain.jpg",
  },
  {
    id: 3,
    name: "Maya Rahman",
    skill: "Photography",
    rating: 4.9,
    image: "https://i.ibb.co/jwjGXW9/maya-rahman.jpg",
  },
  {
    id: 4,
    name: "Riya Chakma",
    skill: "Graphic Design",
    rating: 5.0,
    image: "https://i.ibb.co/n3jTCSY/riya-chakma.jpg",
  },
];

const TopProviders = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="my-16 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary mb-2">
          🏆 Top Rated Providers
        </h2>
        <p className="text-gray-500">
          Meet our most trusted and high-rated skill mentors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {providers.map((p) => (
          <div
            key={p.id}
            data-aos="fade-up"
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="h-56 overflow-hidden rounded-t-xl">
              <img
                src={p.image}
                alt={p.name}
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.skill}</p>
              <div className="mt-2 text-yellow-500 font-medium">
                ⭐ {p.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProviders;
