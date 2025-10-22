import React from "react";
import logo from "/logo.png";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-11/12 mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img className="w-10 " src={logo} alt="" />
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <Link to="/">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <FiHome size={20} />
                </div>
              </div>
            </Link>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            ></div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Login</a>
              </li>
              <li>
                <a>SignUp</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
