import React from "react";
import { Link } from "react-router";
import error404 from "../../assets/Group.png";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <img src={error404} alt="" className="mb-6" />
      <h2 className="text-5xl font-semibold mb-2">Oops, page not found!</h2>
      <p className="text-gray-500 mb-3">
        The page you are looking for is not available.
      </p>
      <Link to="/">
        <button className="flex gap-2 items-center border-b-2 cursor-pointer">
          <HiMiniArrowUturnLeft />
          Go Home!
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
