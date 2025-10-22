import React from "react";
// Import the necessary icons from react-icons/fa or another suitable set
import { FaStar, FaRegStar } from "react-icons/fa";

const ProviderCard = ({
  name = "Faizan K.",
  title = "Beginner Coder",
  rating = 4, // 4 out of 5 stars
  testimonial = "As someone who couldn't afford expensive courses, this platform helped me get started with web development. I'll never forget that.",
  imageUrl = "path/to/your/image.jpg", // REPLACE with your image path
}) => {
  // Function to render the star rating
  const renderStars = () => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        // Filled star (green color applied via className)
        stars.push(<FaStar key={i} className="text-success w-4 h-4" />);
      } else {
        // Empty star
        stars.push(<FaRegStar key={i} className="text-gray-400 w-4 h-4" />);
      }
    }
    return stars;
  };

  return (
    <div className="card w-80 bg-base-100 shadow-xl border border-gray-200">
      {/* Image Section */}
      <figure className="h-40 overflow-hidden">
        {/* Apply grayscale filter and object-cover as per the original image */}
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover filter grayscale"
        />
      </figure>

      {/* Content Section */}
      <div className="card-body p-6">
        {/* Author Info and Rating */}
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-lg text-gray-800 leading-tight">
            — <span className="font-bold">{name}</span>,{" "}
            <span className="font-normal">{title}</span>
          </p>
          <div className="flex space-x-0.5">{renderStars()}</div>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-600 italic text-base leading-relaxed">
          {testimonial}
        </p>
      </div>
    </div>
  );
};

export default ProviderCard;
