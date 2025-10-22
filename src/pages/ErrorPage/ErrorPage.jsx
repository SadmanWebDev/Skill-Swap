import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-4">
      <BiErrorCircle className="text-9xl text-error mb-4 animate-bounce" />
      <h1 className="text-5xl font-bold mb-2">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn btn-primary btn-wide rounded-2xl shadow-md hover:scale-105 transition-transform duration-200"
      >
        Back to Home
      </Link>

      <div className="mt-10 text-sm opacity-70">
        © {new Date().getFullYear()} SkillSwap. All rights reserved.
      </div>
    </div>
  );
};

export default ErrorPage;
