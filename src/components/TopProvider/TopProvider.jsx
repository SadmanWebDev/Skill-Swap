import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const providers = [
  {
    id: 1,
    name: "Alex Martin",
    skill: "Guitar Lessons",
    rating: 4.9,
    image: "https://bv.vc/wp-content/uploads/2024/02/alex-martin-headshot-853x1024.jpg",
  },
  {
    id: 2,
    name: "Sara Hossain",
    skill: "Spoken English",
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmUkKEpnx2Jr6tUNG3XPDYSY8myq8kIwOfQ&s",
  },
  {
    id: 3,
    name: "Maya Rahman",
    skill: "Photography",
    rating: 4.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKl0K-vLQk9XkW1KTOkGGijrUaTrnMU1WiQ&s",
  },
  {
    id: 4,
    name: "Riya Chakma",
    skill: "Graphic Design",
    rating: 5.0,
    image: "https://media.licdn.com/dms/image/v2/D5603AQHnqEmlIJ-Egg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694021681123?e=2147483647&v=beta&t=afIEtiXYgQzb90CrBtEO08If8InQFyOQNb9jl2FA5Wk",
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
